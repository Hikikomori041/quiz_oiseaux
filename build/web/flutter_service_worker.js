'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"assets/AssetManifest.bin": "97e476c3e3839aa9059e9340d86697ce",
"assets/AssetManifest.bin.json": "ee51fb5edf82ebf7459c8571ba6a8307",
"assets/assets/images/Accenteur%2520alpin.jpg": "5c681c4a2f61368445424f7fffaf184f",
"assets/assets/images/Accenteur%2520mouchet.jpg": "8d5a9d48a77163446e421ac37cf5f5a3",
"assets/assets/images/Aigrette%2520garzette.jpg": "32f82c26f8d87c24a2726db33afd08a5",
"assets/assets/images/Alouette%2520des%2520champs.jpg": "a79bfcc9f8a4d8d72b483f50134a2392",
"assets/assets/images/Alouette%2520lulu.jpg": "87d1c60b025146277afa700cd6745948",
"assets/assets/images/Avocette%2520%25C3%25A9l%25C3%25A9gante.jpg": "8d179c738f634c1f81b8b4072df87cc1",
"assets/assets/images/B%25C3%25A9cassine%2520des%2520bois.jpg": "3d3c1a3c5dd27c5ff2cd0169df05d79b",
"assets/assets/images/B%25C3%25A9cassine%2520des%2520marais.jpg": "e7ef523d6db4bfeb745402cc82115efa",
"assets/assets/images/Barge%2520%25C3%25A0%2520queue%2520noire.jpg": "0821434f5a75959bd5d1714671ca2415",
"assets/assets/images/Barge%2520rousse.jpg": "10669a69827d97c81f9c8cbf735bc93e",
"assets/assets/images/Bergeronnette%2520des%2520ruisseaux.jpg": "501c9442f02a26b7b4e55747040720dd",
"assets/assets/images/Bergeronnette%2520grise.jpg": "ecf33e158e19f854e2c7c6a6dec46ee7",
"assets/assets/images/Bergeronnette%2520printani%25C3%25A8re.jpg": "8bcf6125654035b456d05d99819ca911",
"assets/assets/images/Blongios%2520nain.jpg": "7ee7931366d16797814c904d3178413f",
"assets/assets/images/Bondr%25C3%25A9e%2520apivore.jpg": "eba5fcdded834ee3af485c0ae2d70cad",
"assets/assets/images/Bouscarle%2520de%2520Cetti.jpg": "c4b698a52b4467161b21b8bd2be57deb",
"assets/assets/images/Bruant%2520des%2520roseaux.jpg": "9b5e0ac6b986decc2d47c5326afb8b4c",
"assets/assets/images/Bruant%2520jaune.jpg": "0b671e21e4a6a6fc084cc326f4a6e610",
"assets/assets/images/Bruant%2520ortolan.jpg": "546fea21f8a56b405c2dd0e79f5e8d2e",
"assets/assets/images/Bruant%2520proyer.jpg": "a2bc10a53fec3eda91ec451a70061c9b",
"assets/assets/images/Bruant%2520zizi.jpg": "185a851ac7873c839c63daeb3774f977",
"assets/assets/images/Busard%2520cendr%25C3%25A9.jpg": "4f11b5fa2c80feeaa75636e6fa127e4a",
"assets/assets/images/Busard%2520Saint-Martin.jpg": "d9bd1829067fb0dc1aff591ad643b352",
"assets/assets/images/Butor%2520%25C3%25A9toil%25C3%25A9.jpg": "91d376bce50d683811c53bc7441295a5",
"assets/assets/images/Canard%2520chipeau.jpg": "2d27ea4e4c2daef60436c3d501dedcaf",
"assets/assets/images/Canard%2520colvert.jpg": "575dbc4a20c08ae6a41ab7e60a094b63",
"assets/assets/images/Canard%2520pilet.jpg": "a15428d8a3d1ba17f3ac36a2d5cbc327",
"assets/assets/images/Canard%2520siffleur.jpg": "6f9cca989bb3625e078780aa4b578e6f",
"assets/assets/images/Chardonneret%2520%25C3%25A9l%25C3%25A9gant.jpg": "e8668c4bc2de7aef7a6de5b41344a479",
"assets/assets/images/Chevalier%2520arlequin.jpg": "25e1d89b38803dd3183bf3df77fddb3e",
"assets/assets/images/Chevalier%2520cul-blanc.jpg": "135836d43648bd16443a2390de194ab6",
"assets/assets/images/Chevalier%2520gambette.jpg": "04ba06f2844afe1863ed096dad008a13",
"assets/assets/images/Chevalier%2520guignette.jpg": "7ebbfe0806536ed25f0d785202d00068",
"assets/assets/images/Chevalier%2520sylvain.jpg": "892b089b5b6f5b71c1cd60d285b62781",
"assets/assets/images/Chocard%2520%25C3%25A0%2520bec%2520jaune.jpg": "792825ef32cd4cd6b6620db00c62d027",
"assets/assets/images/Choucas%2520des%2520tours.jpg": "2ba9df2609d9c169284765c1b9e47ad4",
"assets/assets/images/Cincle%2520plongeur.jpg": "ef44229b8e2d6fc8ba34ed583e258c96",
"assets/assets/images/Cisticole%2520des%2520joncs.jpg": "c29530e553e924d777a50d6522f48e74",
"assets/assets/images/Corneille%2520noire.jpg": "7f3a9a86b98f190a4c112253cbe5f324",
"assets/assets/images/Coucou%2520gris.jpg": "c8ac46c6e614c2cb33a5160476a91760",
"assets/assets/images/Eider%2520%25C3%25A0%2520duvet.jpg": "abb1b82c6f6a36ec6f67de178e775dba",
"assets/assets/images/Etourneau%2520sansonnet.jpg": "9da2b9d5bd2af5ad393872c3bce34368",
"assets/assets/images/Faisan%2520de%2520Colchide.jpg": "4853cc121a5af43e587b55d490808284",
"assets/assets/images/Faucon%2520cr%25C3%25A9cerelle.jpg": "b3380fbbb41611ccfa9c3f20ee3bb538",
"assets/assets/images/Faucon%2520p%25C3%25A8lerin.jpg": "6f821fc5e3df2118d8a09f99d34400d3",
"assets/assets/images/Fauvette%2520%25C3%25A0%2520t%25C3%25AAte%2520noire.jpg": "8ca6b251a9df48f7f91427d8e62c4149",
"assets/assets/images/Fauvette%2520des%2520jardins.jpg": "b3406c01f757e115906ee62b4fc389d0",
"assets/assets/images/Fauvette%2520grisette.jpg": "ddf7f89f3f04ff9c9fc3695f6de7f10b",
"assets/assets/images/Foulque%2520macroule.jpg": "8211696c7a628f649aef71374f51cafa",
"assets/assets/images/Fuligule%2520milouin.jpg": "1a2296fd3594c62ab248e9afbb7cec3f",
"assets/assets/images/Gallinule%2520poule-d'eau.jpg": "159130784347146c9a3de27de2ebe6b9",
"assets/assets/images/Geai%2520des%2520ch%25C3%25AAnes.jpg": "70a3b03744ad114377a430672bceac0f",
"assets/assets/images/Gobemouche%2520gris.jpg": "9654827bcfaf75a35470a022150b4237",
"assets/assets/images/Gr%25C3%25A8be%2520%25C3%25A0%2520cou%2520noir.jpg": "3c3fbfc8a02f6b22da4df2bab4b23a06",
"assets/assets/images/Gr%25C3%25A8be%2520castagneux.jpg": "adbd11f8076917a6e23b00cc063824b8",
"assets/assets/images/Gr%25C3%25A8be%2520esclavon.jpg": "8d4314446b845ac22e94884f4d6313ff",
"assets/assets/images/Gr%25C3%25A8be%2520hupp%25C3%25A9.jpg": "53d3e87faeefc2e14af84bf3effd5a1f",
"assets/assets/images/Gr%25C3%25A8be%2520jougris.jpg": "10c15ed1a036926cd54d31bbc4e54f99",
"assets/assets/images/Grand%2520Corbeau.jpg": "f1bcc77c582fd20da8bb3f7266fa0670",
"assets/assets/images/Grand%2520Cormoran.jpg": "05dc6461169707e035f80d6eec50e462",
"assets/assets/images/Grande%2520aigrette.jpg": "b32537bfc2f1720c38efaf35961dce3f",
"assets/assets/images/Grimpereau%2520des%2520jardins.jpg": "e66e9f97b19ecbeedaa34cd15b5d96de",
"assets/assets/images/Grive%2520draine.jpg": "8e26d92383a961a55a9616557ede95a8",
"assets/assets/images/Grive%2520litorne.jpg": "f568260bb67456d51948a88533bbcb2b",
"assets/assets/images/Grive%2520musicienne.jpg": "0cb791980229e4f2690c5fa352008a23",
"assets/assets/images/Grosbec%2520casse-noyaux.jpg": "74ec48c2215c1d36c9ae6939452523d4",
"assets/assets/images/Gu%25C3%25AApier%2520d'Europe.jpg": "dc41fae589b0df83b7aaad5447d67f90",
"assets/assets/images/H%25C3%25A9ron%2520cendr%25C3%25A9.jpg": "e47a17f665b016adbdb5feb0606e8262",
"assets/assets/images/Huppe%2520fasci%25C3%25A9e.jpg": "9c192580e3d59b9b2e8dba3089fccd12",
"assets/assets/images/Hypola%25C3%25AFs%2520polyglotte.jpg": "2e079d71356bd880b1c9ab73074f9fc5",
"assets/assets/images/Linotte%2520m%25C3%25A9lodieuse.jpg": "6a4ca3a1e34b5b6c4b963ca89864bc54",
"assets/assets/images/Locustelle%2520luscinio%25C3%25AFde.jpg": "92f944916d3c5744bb51cd226d617db2",
"assets/assets/images/Locustelle%2520tachet%25C3%25A9e.jpg": "60a24877f174cd61f1cb4c9350ba0e6e",
"assets/assets/images/Loriot%2520d'Europe.jpg": "5111e40d2e6f116d324158886e4821be",
"assets/assets/images/M%25C3%25A9sange%2520bleue.jpg": "04fb24b1f6fbdb39c02eaef32dfd665b",
"assets/assets/images/M%25C3%25A9sange%2520charbonni%25C3%25A8re.jpg": "1a8173d66f56cf999594d3c1dfee7638",
"assets/assets/images/M%25C3%25A9sange%2520hupp%25C3%25A9e.jpg": "65f530b9d28c981caa75511d6c190d68",
"assets/assets/images/M%25C3%25A9sange%2520noire.jpg": "03e395365e8a822209efb439e02f88bb",
"assets/assets/images/Martin-p%25C3%25AAcheur%2520d'Europe.jpg": "db7951db6b8db9d8ab2331dee929bb80",
"assets/assets/images/Merle%2520noir.jpg": "581bff6b3f63029008c5e3b14ee1a953",
"assets/assets/images/Moineau%2520domestique.jpg": "7ff982f89986ba8d2cb5cf3d8997d843",
"assets/assets/images/Mouette%2520rieuse.jpg": "1c7544d7b44efcb2a6360717c63c2dca",
"assets/assets/images/Oedicn%25C3%25A8me%2520criard.jpg": "610eb977af631bff02b8011abdd89f1c",
"assets/assets/images/Oie%2520cendr%25C3%25A9e.jpg": "3f23f691cfea516715e9ed8615af64d9",
"assets/assets/images/Oie%2520rieuse.jpg": "f137833b719e2261d2f9eabee2d7c279",
"assets/assets/images/Orite%2520%25C3%25A0%2520longue%2520queue.jpg": "c97f0f8125ab0f3b7ae6ff36dc048bf3",
"assets/assets/images/Outarde%2520canepeti%25C3%25A8re.jpg": "1d3e2d4a0ab9874bf076d19ccec1972d",
"assets/assets/images/Panure%2520%25C3%25A0%2520moustaches.jpg": "88e96807924789a930948920807006cf",
"assets/assets/images/Phragmite%2520des%2520joncs.jpg": "2d407b7e0f50d6fbf4dc4da01595e68e",
"assets/assets/images/Pic%2520%25C3%25A9peiche.jpg": "2abce7dd2115e6a80b94fcbe5b79f95a",
"assets/assets/images/Pic%2520%25C3%25A9peichette.jpg": "a20d359ddbfb1c37019b63883bd4efc3",
"assets/assets/images/Pic%2520mar.jpg": "6fd12d576cbb43ae8e20419f48ff6d6e",
"assets/assets/images/Pic%2520noir.jpg": "4f250a56ccd851e84ff727d69049c727",
"assets/assets/images/Pic%2520vert.jpg": "56abe17694b411d8ead6f4fc56b9e46d",
"assets/assets/images/Pie%2520bavarde.jpg": "ba14d143ff315a1b5515b16609ae4d71",
"assets/assets/images/Pie-gri%25C3%25A8che%2520%25C3%25A9corcheur.jpg": "25e6e715f186d10434a83f570b073689",
"assets/assets/images/Pigeon%2520ramier.jpg": "a46f9a2edaea0ff5a1d20d55f5533fcc",
"assets/assets/images/Pinson%2520des%2520arbres.jpg": "f76da128892f5809ed3b9b8f1260307a",
"assets/assets/images/Pipit%2520des%2520arbres.jpg": "0594196c6de32e01395c3f639778dd27",
"assets/assets/images/Pipit%2520rousseline.jpg": "6d9e8a8998783cc7b9712c1d0e4186f7",
"assets/assets/images/Pouillot%2520de%2520Bonelli.jpg": "076f351b9b0a0423c9b7596ce6537956",
"assets/assets/images/Pouillot%2520fitis.jpg": "2c997fc147ee91b574e3e829fbce77c3",
"assets/assets/images/Pouillot%2520siffleur.jpg": "217ccaa88564d25759ddaac627e684b5",
"assets/assets/images/Pouillot%2520v%25C3%25A9loce.jpg": "375275fc8a30b2f6c89cb97c255eb27f",
"assets/assets/images/Roitelet%2520hupp%25C3%25A9.jpg": "c047b57b04759c15d82e153286a72a00",
"assets/assets/images/Roitelet%2520triple-bandeau.jpg": "92f074d0fd3c126c7b4d701d94eaed48",
"assets/assets/images/Rossignol%2520philom%25C3%25A8le.jpg": "8e8fd2a5499174a6d68ccadb6b7f02c9",
"assets/assets/images/Rougegorge%2520familier.jpg": "edd7bff953d137bbd7b4c2bdc1c900a4",
"assets/assets/images/Rougequeue%2520%25C3%25A0%2520front%2520blanc.jpg": "b01aa9bd39350bd4f528d37cdfa41d99",
"assets/assets/images/Rougequeue%2520noir.jpg": "ec0c73e9a9e31ce2ab0686970ff6acac",
"assets/assets/images/Rousserolle%2520effarvatte.jpg": "1eda86f1abc26278e013afe600503d8b",
"assets/assets/images/Rousserolle%2520turdo%25C3%25AFde.jpg": "03b33744ff9096dc22321b8da5664a76",
"assets/assets/images/Rousserolle%2520verderolle.jpg": "728627dcf4f6aa6afe90143752db7bd8",
"assets/assets/images/Sarcelle%2520d'%25C3%25A9t%25C3%25A9.jpg": "00bdc205ef56aa32b02a660190629f77",
"assets/assets/images/Sarcelle%2520d'hiver.jpg": "0e1c34ebfe43a7fe97d11f31f4afe5d9",
"assets/assets/images/Serin%2520cini.jpg": "972d1c78f79f213b4c034e6f69203d1a",
"assets/assets/images/Sittelle%2520torchepot.jpg": "72075acfd8f8b871e6df47eebb1ab961",
"assets/assets/images/Sizerin%2520flamm%25C3%25A9.jpg": "471217478697e66c99730bb7e86fe958",
"assets/assets/images/Spatule%2520blanche.jpg": "2ec18295df573ed132f728a58b1d71b9",
"assets/assets/images/Tadorne%2520de%2520Belon.jpg": "e07c265023d81b668c1fd4c8d951c237",
"assets/assets/images/Tarier%2520des%2520pr%25C3%25A9s.jpg": "d8fc2725e1c1bf63ef980f950b2d0e0f",
"assets/assets/images/Tarier%2520p%25C3%25A2tre.jpg": "59e283cff0e9437a9594bfd67ef10ccc",
"assets/assets/images/Tarin%2520des%2520aulnes.jpg": "b15876ae69a36e076d94de8bc028846d",
"assets/assets/images/Tichodrome%2520%25C3%25A9chelette.jpg": "c100e2ce25f3f5cc8c0b7205d7d78c59",
"assets/assets/images/Torcol%2520fourmilier.jpg": "8443fd9f9893049022027a0307c3c1e2",
"assets/assets/images/Tourterelle%2520des%2520bois.jpg": "15ca58176a75579507692aba8bac63d7",
"assets/assets/images/Tourterelle%2520turque.jpg": "6d26b95ea9f8dea6af28e40df9bbccdd",
"assets/assets/images/Traquet%2520motteux.jpg": "d2d2478002c17d2162a97a44d2a4c895",
"assets/assets/images/Troglodyte%2520mignon.jpg": "9ebc788390ec3f4831e1dbffacf364be",
"assets/assets/images/Vanneau%2520hupp%25C3%25A9.jpg": "5d9ca95c7a1cba6859013c158dbd542d",
"assets/assets/images/Verdier%2520d'Europe.jpg": "98ec5e6f1301a18fb81f62673031aa16",
"assets/assets/oiseaux.json": "4168e5c4bbb500e50647bc7340147db3",
"assets/assets/sounds/correct.mp3": "1337c35d1d49f38a0ced3db4ea5b75ba",
"assets/assets/sounds/wrong.mp3": "4b7da2fe020a87e117afc1706336e659",
"assets/FontManifest.json": "7b2a36307916a9721811788013e65289",
"assets/fonts/MaterialIcons-Regular.otf": "f15ae4e2c03f16b2adb4f4c72d9aa939",
"assets/NOTICES": "a90c0df0a4b10e864f1a4fc794675b44",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"assets/shaders/stretch_effect.frag": "40d68efbbf360632f614c731219e95f0",
"canvaskit/canvaskit.js": "8331fe38e66b3a898c4f37648aaf7ee2",
"canvaskit/canvaskit.js.symbols": "a3c9f77715b642d0437d9c275caba91e",
"canvaskit/canvaskit.wasm": "9b6a7830bf26959b200594729d73538e",
"canvaskit/chromium/canvaskit.js": "a80c765aaa8af8645c9fb1aae53f9abf",
"canvaskit/chromium/canvaskit.js.symbols": "e2d09f0e434bc118bf67dae526737d07",
"canvaskit/chromium/canvaskit.wasm": "a726e3f75a84fcdf495a15817c63a35d",
"canvaskit/skwasm.js": "8060d46e9a4901ca9991edd3a26be4f0",
"canvaskit/skwasm.js.symbols": "3a4aadf4e8141f284bd524976b1d6bdc",
"canvaskit/skwasm.wasm": "7e5f3afdd3b0747a1fd4517cea239898",
"canvaskit/skwasm_heavy.js": "740d43a6b8240ef9e23eed8c48840da4",
"canvaskit/skwasm_heavy.js.symbols": "0755b4fb399918388d71b59ad390b055",
"canvaskit/skwasm_heavy.wasm": "b0be7910760d205ea4e011458df6ee01",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "24bc71911b75b5f8135c949e27a2984e",
"flutter_bootstrap.js": "b0074a83e219fd0248f5a551436f47b4",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "30312192e40435cf0257868b5eee4f74",
"/": "30312192e40435cf0257868b5eee4f74",
"main.dart.js": "c4d85975feb409c8939ffa73c1b6964f",
"manifest.json": "30a43c022081a8996cdb0bdfb7db1572",
"version.json": "467391e95f27159855a4ffd0ca2b932b"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"flutter_bootstrap.js",
"assets/AssetManifest.bin.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
