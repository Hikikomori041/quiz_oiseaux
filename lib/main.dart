import 'dart:math';
import 'package:flutter/material.dart';
import 'package:audioplayers/audioplayers.dart';
import 'dart:convert';
import 'package:flutter/services.dart';
import 'package:confetti/confetti.dart'; // ← N’oublie pas cet import en haut !

/// Fonction pour faire des confettis en forme d’étoile
Path drawStar(Size size) {
  double ratio = 0.5;
  double halfWidth = size.width / 2;
  double halfHeight = size.height / 2;
  double radius = halfWidth < halfHeight ? halfWidth : halfHeight;

  final path = Path();
  path.moveTo(radius, 0);
  for (int i = 1; i < 10; i++) {
    double angle = i * pi / 5;
    double x = radius * sin(angle) + halfWidth;
    double y = radius * cos(angle) + halfHeight;
    if (i % 2 == 0) {
      path.lineTo(x, y);
    } else {
      path.lineTo(x * 0.5, y * 0.5);
    }
  }
  path.close();
  return path;
}

void main() {
  runApp(const QuizOiseauxApp());
}

class QuizOiseauxApp extends StatelessWidget {
  const QuizOiseauxApp({super.key});

  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      // title: 'Quiz Oiseaux France',
      theme: ThemeData(primarySwatch: Colors.green, fontFamily: 'Roboto'),
      home: const QuizScreen(),
      debugShowCheckedModeBanner: false,
    );
  }
}

class Bird {
  final String name;
  final String scientificName;
  final String imageUrl;

  Bird(this.name, this.scientificName, this.imageUrl);
}

class QuizScreen extends StatefulWidget {
  const QuizScreen({super.key});

  @override
  State<QuizScreen> createState() => _QuizScreenState();
}

class _QuizScreenState extends State<QuizScreen> {
  late List<Bird> birds;
  late Bird currentBird;
  late List<String> options;
  int score = 0;
  int questionCount = 0;
  bool answered = false;
  String? selectedAnswer;
  final player = AudioPlayer();
  late ConfettiController _confettiController;


  // Ajoute ces variables dans la classe _QuizScreenState
  List<Map<String, dynamic>> allBirdsData = [];  // Stocke tout le JSON

  // Ajoute ces variables dans la classe (en haut avec les autres)
  late String currentBirdName;
  late String currentScientificName;
  int currentBirdIndex = 0; // pour savoir quel est le bon

  @override
  void initState() {
    super.initState();
    loadBirdsData();  // Charge le JSON au démarrage
    _confettiController = ConfettiController(duration: const Duration(seconds: 3));
  }

  // Nouvelle fonction pour charger le JSON
  Future<void> loadBirdsData() async {
    final String response = await rootBundle.loadString('assets/oiseaux.json');
    final Map<String, dynamic> data = json.decode(response);

    setState(() {
      allBirdsData = data.entries.map((entry) {
        return {
          'nom_fr': entry.key,
          'type': entry.value['type'],
          'nom_latin': entry.value['nom_latin'],
        };
      }).toList();
    });

    // Une fois chargé, on peut lancer la première question
    newQuestion();
  }

  // Remplace complètement _getBirdList() par ça :
  void newQuestion() {
    if (allBirdsData.isEmpty) return; // sécurité

    setState(() {
      answered = false;
      selectedAnswer = null;

      // On tire 4 oiseaux au hasard
      final shuffled = [...allBirdsData]..shuffle();
      final selectedFour = shuffled.take(4).toList();

      // On choisit lequel est le bon
      currentBirdIndex = Random().nextInt(4);
      final correctBird = selectedFour[currentBirdIndex];

      currentBirdName = correctBird['nom_fr'] as String;
      currentScientificName = correctBird['nom_latin'] as String;

      // On génère les 4 options
      options = selectedFour.map((b) => b['nom_fr'] as String).toList();
      options.shuffle(); // on mélange pour que la bonne réponse ne soit pas toujours au même endroit
    });
  }


  void checkAnswer(String answer) async {
    if (answered) return;
    setState(() {
      answered = true;
      selectedAnswer = answer;
    });

    if (answer == currentBirdName) {
      score++;
      _confettiController.play();   // ← LANCE LES CONFETTIS
      await player.play(AssetSource('sounds/correct.mp3'), volume: 0.25);
    } else {
      await player.play(AssetSource('sounds/wrong.mp3'), volume: 0.1);
    }
    
    // On compte la question seulement après réponse
    setState(() {
      questionCount++;
    });
  }

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      body: Center(                                    // ← AJOUT
        child: SingleChildScrollView(                   // ← AJOUT (pour les petits écrans)
          padding: const EdgeInsets.all(16.0),
          child: Column(
            mainAxisSize: MainAxisSize.min,    
            children: [
              Card(
                child: Padding(
                  padding: const EdgeInsets.all(12.0),
                  child: Text(
                    "Score : $score / $questionCount",
                    style: const TextStyle(fontSize: 24, fontWeight: FontWeight.bold),
                  ),
                ),
              ),
              const SizedBox(height: 20),
              ClipRRect(
                borderRadius: BorderRadius.circular(16),
                child: Image.asset(
                  'assets/images/$currentBirdName.jpg',
                  height: 300,
                  fit: BoxFit.cover,
                  errorBuilder: (context, error, stackTrace) {
                    return Container(
                      height: 300,
                      color: Colors.red[100],
                      child: Column(
                        mainAxisAlignment: MainAxisAlignment.center,
                        children: [
                          const Icon(Icons.warning, size: 50, color: Colors.red),
                          Text('Image manquante :\n$currentBirdName.jpg', textAlign: TextAlign.center),
                        ],
                      ),
                    );
                  },
                ),
              ),
              // const SizedBox(height: 20),
              Text(
                currentScientificName,
                style: const TextStyle(fontStyle: FontStyle.italic, fontSize: 16),
              ),
              
              // const SizedBox(height: 30),

            // ESPACE RÉSERVÉ POUR LES 4 BOUTONS (hauteur fixe 400px)
            // → même quand ils sont cachés, l'espace reste → rien ne saute !
            SizedBox(
              height: 270,  // ajuste si tu veux plus ou moins d'espace
              child: Center(
                child: !answered
                    ? Column(
                        mainAxisAlignment: MainAxisAlignment.center,
                        children: options.map((option) => Padding(
                          padding: const EdgeInsets.symmetric(vertical: 8),
                          child: SizedBox(
                            width: double.infinity,
                            child: ElevatedButton(
                              style: ElevatedButton.styleFrom(
                                backgroundColor: Colors.blue[600],
                                foregroundColor: Colors.white,
                                padding: const EdgeInsets.all(18),
                                shape: RoundedRectangleBorder(borderRadius: BorderRadius.circular(12)),
                              ),
                              onPressed: () => checkAnswer(option),
                              child: Text(option, style: const TextStyle(fontSize: 20)),
                            ),
                          ),
                        )).toList(),
                      )
                    : Column(
                        mainAxisAlignment: MainAxisAlignment.center,
                        children: [
                          // Confettis (si bonne réponse)
                          if (selectedAnswer == currentBirdName)
                            Align(
                              alignment: Alignment.topCenter,
                              child: ConfettiWidget(
                                confettiController: _confettiController,
                                blastDirection: pi,
                                emissionFrequency: 0.05,
                                numberOfParticles: 80,
                                gravity: 0.25,
                                colors: const [Colors.green, Colors.yellow, Colors.orange, Colors.red, Colors.blue, Colors.purple],
                                createParticlePath: drawStar,
                                shouldLoop: false,
                              ),
                            ),

                          // Message bonne/mauvaise réponse
                          Container(
                            padding: const EdgeInsets.all(20),
                            decoration: BoxDecoration(
                              color: selectedAnswer == currentBirdName ? Colors.green[100] : Colors.red[100],
                              borderRadius: BorderRadius.circular(16),
                              border: Border.all(
                                color: selectedAnswer == currentBirdName ? Colors.green : Colors.red,
                                width: 3,
                              ),
                            ),
                            child: Text(
                              selectedAnswer == currentBirdName
                                  ? "Bonne réponse !"
                                  : "Mauvaise réponse ! C'était $currentBirdName",
                              style: TextStyle(
                                fontSize: 24,
                                fontWeight: FontWeight.bold,
                                color: selectedAnswer == currentBirdName ? Colors.green[800] : Colors.red[800],
                              ),
                              textAlign: TextAlign.center,
                            ),
                          ),
                          const SizedBox(height: 40),

                          // Bouton Question suivante
                          ElevatedButton(
                            style: ElevatedButton.styleFrom(
                              backgroundColor: Colors.green[700],
                              padding: const EdgeInsets.symmetric(horizontal: 60, vertical: 20),
                              shape: RoundedRectangleBorder(borderRadius: BorderRadius.circular(30)),
                            ),
                            onPressed: newQuestion,
                            child: const Text("Question suivante", style: TextStyle(fontSize: 22, color: Colors.white)),
                          ),
                        ],
                      ),
              ),
            ),

            // const SizedBox(height: 20),
          ],
        ),
      ),
    ),
  );
}

  @override
  void dispose() {
    player.dispose();
    super.dispose();
    _confettiController.dispose();
  }
}