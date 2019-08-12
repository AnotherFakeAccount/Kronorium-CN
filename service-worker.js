/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts("https://storage.googleapis.com/workbox-cdn/releases/4.3.1/workbox-sw.js");

self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
});

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "404.html",
    "revision": "3c4ce6024e3a5e8723de225243a07fc6"
  },
  {
    "url": "assets/css/0.styles.e0baf322.css",
    "revision": "d34d41f9a8b457d66e53bac97bac22a6"
  },
  {
    "url": "assets/fonts/fa-brands-400.4f786efd.woff2",
    "revision": "4f786efdf6328877ec2448bf265bcc8f"
  },
  {
    "url": "assets/fonts/fa-brands-400.72f5c754.woff",
    "revision": "72f5c754189a296467db59e26e2b4671"
  },
  {
    "url": "assets/fonts/fa-brands-400.75dae2b6.ttf",
    "revision": "75dae2b62813bc641a9b6a2fc041e4de"
  },
  {
    "url": "assets/fonts/fa-brands-400.e33a1a54.eot",
    "revision": "e33a1a54eb0a1e560362fcf5335ac26c"
  },
  {
    "url": "assets/fonts/fa-regular-400.76d069c8.ttf",
    "revision": "76d069c84f54a63d1bf9e29c76fe65e6"
  },
  {
    "url": "assets/fonts/fa-regular-400.d90e1b03.woff2",
    "revision": "d90e1b03a9168c0d775a52098423adfb"
  },
  {
    "url": "assets/fonts/fa-regular-400.d98ffd73.eot",
    "revision": "d98ffd73c6b104b42bfe69c987a72924"
  },
  {
    "url": "assets/fonts/fa-regular-400.f9695ea8.woff",
    "revision": "f9695ea8029b2975dea6753bf6f1bf1c"
  },
  {
    "url": "assets/fonts/fa-solid-900.55ce8d0c.woff",
    "revision": "55ce8d0ca92adb7c283d6043d0edf46f"
  },
  {
    "url": "assets/fonts/fa-solid-900.60ce8cf4.woff2",
    "revision": "60ce8cf4dd9fe177abdfeda21e20798e"
  },
  {
    "url": "assets/fonts/fa-solid-900.e9809ab6.ttf",
    "revision": "e9809ab6a5a34dc6b7966de82265d6bd"
  },
  {
    "url": "assets/fonts/fa-solid-900.f9b8a1aa.eot",
    "revision": "f9b8a1aa417e318d5be775e14ee3c475"
  },
  {
    "url": "assets/img/1.a233a244.jpg",
    "revision": "a233a24486875361422952f285f779ac"
  },
  {
    "url": "assets/img/2.fc0a46f6.jpg",
    "revision": "fc0a46f6088d8a31f08fe2ace3472f22"
  },
  {
    "url": "assets/img/3.05382ae6.jpg",
    "revision": "05382ae612ae46b99cc657351072aacf"
  },
  {
    "url": "assets/img/4.364291b2.jpg",
    "revision": "364291b2811fd59a521c74a2c5468fd5"
  },
  {
    "url": "assets/img/acid_bottle.9c9b78ba.jpg",
    "revision": "9c9b78ba75e02e0768f63db23113c5be"
  },
  {
    "url": "assets/img/air.ee3648a7.svg",
    "revision": "ee3648a793b459842574d14c5f4958c4"
  },
  {
    "url": "assets/img/artifact-1.5c2821f6.jpeg",
    "revision": "5c2821f6a106672a3980cc53ee8c9738"
  },
  {
    "url": "assets/img/background.800a7615.jpg",
    "revision": "800a7615d57d366b7159bf37935e1a22"
  },
  {
    "url": "assets/img/barrel1.6839fc0a.jpg",
    "revision": "6839fc0a3b01844162d2ceb1db5f1352"
  },
  {
    "url": "assets/img/barrel2.a120ee37.jpg",
    "revision": "a120ee373a937fa537d9071e3a89bcda"
  },
  {
    "url": "assets/img/barrel3.d7798ae8.jpg",
    "revision": "d7798ae8f385feb50d81a88b6f000ce3"
  },
  {
    "url": "assets/img/barrel4.145fd4cf.jpg",
    "revision": "145fd4cf5ffbadea3bd89a39caec4234"
  },
  {
    "url": "assets/img/barrel5.bc0b652d.jpg",
    "revision": "bc0b652d6e0d32748cf35e219a4e9ed3"
  },
  {
    "url": "assets/img/barrel6.4dce09b6.jpg",
    "revision": "4dce09b6b6a19539b05704c247298116"
  },
  {
    "url": "assets/img/blundergat_upgrade_CN_2.7a1f002f.jpg",
    "revision": "7a1f002f5a70a6c449c95c14dcb503ab"
  },
  {
    "url": "assets/img/c-d_street_aim.7f457c02.jpg",
    "revision": "7f457c02b8c0524ffb3d5c1c5662c415"
  },
  {
    "url": "assets/img/c-d_street.4eea2257.jpg",
    "revision": "4eea2257d957313103ca8452f291738d"
  },
  {
    "url": "assets/img/car.b0c7cdf0.jpeg",
    "revision": "b0c7cdf020e1d498d560b82ab2d229d0"
  },
  {
    "url": "assets/img/chest-mailroom.2f9b0d52.jpeg",
    "revision": "2f9b0d5210f3d7402bd36f322be9ae2c"
  },
  {
    "url": "assets/img/chest-state.5ede3009.jpeg",
    "revision": "5ede3009d34ed03ea342b51c92bff7b1"
  },
  {
    "url": "assets/img/chest-turbine.d36fdd05.jpeg",
    "revision": "d36fdd050d0df8978168275f5ebb84df"
  },
  {
    "url": "assets/img/clock-bridge.09a08785.jpeg",
    "revision": "09a08785e9bc2e3ed0621245f83822b5"
  },
  {
    "url": "assets/img/clock-location-1st.adc17b54.jpg",
    "revision": "adc17b5438051f4a964527097109ddd6"
  },
  {
    "url": "assets/img/clock-location-berths.842be2b7.jpeg",
    "revision": "842be2b79b1337fc751fe8e09ad5a827"
  },
  {
    "url": "assets/img/clock-location-grand-staircase.2d451c59.jpg",
    "revision": "2d451c59dd0c05bd963ce51826e880cf"
  },
  {
    "url": "assets/img/clock-location-kitchen.41f76745.jpg",
    "revision": "41f767457f44b3a8f611364a48bb20c0"
  },
  {
    "url": "assets/img/clock-location-mailroom.41265379.jpg",
    "revision": "412653790787f0eb4ab500189007601d"
  },
  {
    "url": "assets/img/cracker.5dd5c4b0.jpeg",
    "revision": "5dd5c4b06785a455fb3a7c09b9f7758f"
  },
  {
    "url": "assets/img/dials-bridge.e507cfd6.jpg",
    "revision": "e507cfd63e7173bfe14dafed60591ccf"
  },
  {
    "url": "assets/img/dials-poopdeck.6e9ecd68.jpg",
    "revision": "6e9ecd68c8764cf02781fec6e92306d4"
  },
  {
    "url": "assets/img/distillery-piece-1-location.ee11e449.jpeg",
    "revision": "ee11e449897d9262dcc271d4cda9a95c"
  },
  {
    "url": "assets/img/distillery-piece-2-location1.b56b5af5.jpeg",
    "revision": "b56b5af55d753f63989da8fcf3d89ee0"
  },
  {
    "url": "assets/img/distillery.216c4fb1.jpeg",
    "revision": "216c4fb13d434dd46848b5a129279726"
  },
  {
    "url": "assets/img/distillery3.864360aa.jpeg",
    "revision": "864360aab78da6f8a8904177600c6b57"
  },
  {
    "url": "assets/img/distillery32.f9f71b43.jpeg",
    "revision": "f9f71b4384143523748bb09148a4dd48"
  },
  {
    "url": "assets/img/docks_aim.d384ee6b.jpg",
    "revision": "d384ee6b15c27b1c48b820748d4105c6"
  },
  {
    "url": "assets/img/docks.ab314313.jpg",
    "revision": "ab3143138d6b2aad10e4bc8360788a87"
  },
  {
    "url": "assets/img/eagle_plaza_aim.ea90324e.jpg",
    "revision": "ea90324e64374c320e5485c0bde95196"
  },
  {
    "url": "assets/img/eagle_plaza.eac71a41.jpg",
    "revision": "eac71a41f5f4e72bec9017f1c77652af"
  },
  {
    "url": "assets/img/earth.5127b0a9.svg",
    "revision": "5127b0a96cd7868271f7e074b6188df2"
  },
  {
    "url": "assets/img/engineroom-dials.15317868.jpg",
    "revision": "153178687bf7431bd2960af6d26ca1d1"
  },
  {
    "url": "assets/img/fa-brands-400.060ea8dd.svg",
    "revision": "060ea8dd8446c15159ed6ec217ae29b9"
  },
  {
    "url": "assets/img/fa-regular-400.0234a585.svg",
    "revision": "0234a585809be071bd68db999f27f829"
  },
  {
    "url": "assets/img/fa-solid-900.d42cc8bb.svg",
    "revision": "d42cc8bb088b9bbcb51b1db2d9210976"
  },
  {
    "url": "assets/img/fire.37fb0add.svg",
    "revision": "37fb0add718a9a817f4bf9633965afca"
  },
  {
    "url": "assets/img/firework-danu.b821ff01.jpeg",
    "revision": "b821ff010819f71afa621d41473f98a1"
  },
  {
    "url": "assets/img/firework-poopdeck.137bc820.jpeg",
    "revision": "137bc820c59837a2bf02eda399afd98f"
  },
  {
    "url": "assets/img/firework-shield.251e4320.jpeg",
    "revision": "251e4320245c5ac100eb5f3859bdd905"
  },
  {
    "url": "assets/img/firework-strafe.2769f65f.jpeg",
    "revision": "2769f65ffadfe22c49e61ec75448f480"
  },
  {
    "url": "assets/img/getter-engine.8296f4e2.jpeg",
    "revision": "8296f4e2c0ab291f6267cfde6116664d"
  },
  {
    "url": "assets/img/getter-mailroom.6a2689b6.jpeg",
    "revision": "6a2689b6bb1aad749f77a619ec2a2cde"
  },
  {
    "url": "assets/img/getter-millionaire.e5beb069.jpeg",
    "revision": "e5beb0692581b644ea145e12a4b687d3"
  },
  {
    "url": "assets/img/kit_body.ac91a51f.jpg",
    "revision": "ac91a51faf295ed9e03290e807d092c4"
  },
  {
    "url": "assets/img/kraken-forecastle.40f49d9f.jpeg",
    "revision": "40f49d9f1c4916804fe5eef4a68b7a3b"
  },
  {
    "url": "assets/img/large-safe.d5d85967.jpeg",
    "revision": "d5d85967f13c8bfd4827b40cd0f9f7aa"
  },
  {
    "url": "assets/img/lights.aaaad769.jpeg",
    "revision": "aaaad769c47d2396b509a84295afe7a8"
  },
  {
    "url": "assets/img/made-with-bulma.c9c9832e.png",
    "revision": "c9c9832ebc8203f997d62840521c7277"
  },
  {
    "url": "assets/img/middle-location2.59a22c76.jpeg",
    "revision": "59a22c76aef38b80b6c50e87bfafeeca"
  },
  {
    "url": "assets/img/motor.d9014054.jpg",
    "revision": "d9014054a9c6dd5617595e0a0e279c5d"
  },
  {
    "url": "assets/img/outlet-1stclass.7b841ffa.jpeg",
    "revision": "7b841ffa3ba756eea22049afbb76aa2b"
  },
  {
    "url": "assets/img/outlet-aft.d3aefacb.jpeg",
    "revision": "d3aefacbbd23bc19888cb97f3d0974da"
  },
  {
    "url": "assets/img/outlet-berths.44dd0544.jpeg",
    "revision": "44dd05446af1479fb50e73cc97344f32"
  },
  {
    "url": "assets/img/outlet-dinnghall.a925d8c6.jpg",
    "revision": "a925d8c652e4b82aacdb0d3290a2d3c3"
  },
  {
    "url": "assets/img/outlet-grand.bfcb2deb.jpeg",
    "revision": "bfcb2deb8668d3c118c1b396f64852f9"
  },
  {
    "url": "assets/img/outlet-state.dc10046c.jpeg",
    "revision": "dc10046c6c1af64b740281a17244a11c"
  },
  {
    "url": "assets/img/reward-binoculars.89b4a440.jpeg",
    "revision": "89b4a4402c6170a9391cf8d697668ee2"
  },
  {
    "url": "assets/img/roof_aim.d5ac8d79.jpg",
    "revision": "d5ac8d79f2601cbad585dbccf6a64a18"
  },
  {
    "url": "assets/img/roof.9dd118c4.jpg",
    "revision": "9dd118c4b340089a84853c2e5774b22d"
  },
  {
    "url": "assets/img/safe-berths.ccb56afc.jpeg",
    "revision": "ccb56afc44e677840eaf90fef84917a3"
  },
  {
    "url": "assets/img/safe-bridge.20f6c507.jpeg",
    "revision": "20f6c5073a93c9602c870080db5bd1cd"
  },
  {
    "url": "assets/img/safe-millionaire.b6144620.jpeg",
    "revision": "b61446203a1a960c2811dba7bfc8fe09"
  },
  {
    "url": "assets/img/safe-zeus.7759d2ee.jpeg",
    "revision": "7759d2ee0f4004715066221ffa14caa6"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/img/sender-aft.5d8710e3.jpeg",
    "revision": "5d8710e303cbaa4d21dda5170332551e"
  },
  {
    "url": "assets/img/sender-berths.3dc68156.jpeg",
    "revision": "3dc68156dd8b684ad35d1371bacc9d39"
  },
  {
    "url": "assets/img/sender-bridge.304caa47.jpeg",
    "revision": "304caa47505ff7a1abde521ecd49e774"
  },
  {
    "url": "assets/img/sender-rk7.c851eda5.jpeg",
    "revision": "c851eda57ede94db0685a3179f53262c"
  },
  {
    "url": "assets/img/sender-zeus.9c3efb61.jpg",
    "revision": "9c3efb61e02784def36641d3d667ff17"
  },
  {
    "url": "assets/img/shield-part3-location2.8716dc2d.jpeg",
    "revision": "8716dc2d29ce9ca01ad82149883f93a5"
  },
  {
    "url": "assets/img/shield-piece-1-location1.898a16c6.jpg",
    "revision": "898a16c64396e35c18c74549137d237f"
  },
  {
    "url": "assets/img/shield-piece-1-location2.17910081.jpeg",
    "revision": "17910081fca535ebc76c8c8dbf77e90c"
  },
  {
    "url": "assets/img/shield-piece-2-location2.ae8e5cf3.jpeg",
    "revision": "ae8e5cf3912d7079822758a0373c1a2d"
  },
  {
    "url": "assets/img/shield-piece-3-location1.0dcfe54c.jpeg",
    "revision": "0dcfe54c6fecb63dcc52a823f3587855"
  },
  {
    "url": "assets/img/shield.06e18e9c.jpeg",
    "revision": "06e18e9c137bd0a1d07c1d4779430067"
  },
  {
    "url": "assets/img/switch.c9d66f65.jpeg",
    "revision": "c9d66f65fd10d5e25e67a15fc9cf4c32"
  },
  {
    "url": "assets/img/terminal-air.ef1a9898.jpeg",
    "revision": "ef1a9898b198c48f091d79adba101466"
  },
  {
    "url": "assets/img/terminal-earth.a7b63d52.jpeg",
    "revision": "a7b63d525c640d38415580d73b7688da"
  },
  {
    "url": "assets/img/terminal-fire.71a7a351.jpg",
    "revision": "71a7a351b8a6b7b1de07c5448ca9247f"
  },
  {
    "url": "assets/img/terminal-water.ac749eeb.jpeg",
    "revision": "ac749eeb447fd0c7c34abebe863d36df"
  },
  {
    "url": "assets/img/valve-boiler_room.25b077c7.jpeg",
    "revision": "25b077c7b8c2b5d5f0047a9c10838ef6"
  },
  {
    "url": "assets/img/valve-cargo_hold.daf38d80.jpeg",
    "revision": "daf38d80e95736bf489a87bfeedba660"
  },
  {
    "url": "assets/img/water.4ecf1e5a.svg",
    "revision": "4ecf1e5a4c43fb4de48afa3b1a2c11f6"
  },
  {
    "url": "assets/img/west_grounds_aim.2ac1bf40.jpg",
    "revision": "2ac1bf40d924bb7dd576920e85c49970"
  },
  {
    "url": "assets/img/west_grounds.c30f8ce7.jpg",
    "revision": "c30f8ce74fb181efb8643c14c994b969"
  },
  {
    "url": "assets/js/10.22287f75.js",
    "revision": "38556d0a74221900e3d23cdd990ed1c4"
  },
  {
    "url": "assets/js/11.f9000748.js",
    "revision": "cf0d9a7cc1099038150bc30cd7300a6d"
  },
  {
    "url": "assets/js/12.7ccf92a1.js",
    "revision": "f7aa2303a50671431fe068ac313bf186"
  },
  {
    "url": "assets/js/13.67c42b6a.js",
    "revision": "0faabfd2f25e99d375e0b069f8500fea"
  },
  {
    "url": "assets/js/14.9ea27f98.js",
    "revision": "da431ed7db4d580b630775eaecbe3e83"
  },
  {
    "url": "assets/js/15.b70d1116.js",
    "revision": "882fea810a1cf02abe3db25782f65502"
  },
  {
    "url": "assets/js/16.1397c199.js",
    "revision": "bc89193c22b47ed777e8b07ce7cc7031"
  },
  {
    "url": "assets/js/17.e7051a2e.js",
    "revision": "122387f603bfd1e9fa3528c262c9adff"
  },
  {
    "url": "assets/js/18.b263afc0.js",
    "revision": "7e2f509832d5e522f574a7865493ee4e"
  },
  {
    "url": "assets/js/19.e0355dd3.js",
    "revision": "baa002aa08c1d5e41413593a5009d3ea"
  },
  {
    "url": "assets/js/2.03d7b08b.js",
    "revision": "de6fc7f447f2256053245c1507094f02"
  },
  {
    "url": "assets/js/20.a138e0f6.js",
    "revision": "c05bc6adba1fd1f5910e00a52a23281d"
  },
  {
    "url": "assets/js/21.f7316efc.js",
    "revision": "9c9675cd93dc9ba71bdc99e2e6bec2e3"
  },
  {
    "url": "assets/js/22.12e70dd5.js",
    "revision": "34692701e8b6232653c7c7fca3358357"
  },
  {
    "url": "assets/js/23.a694198c.js",
    "revision": "bf733952f8cfcdaa497ecf5452fca3bc"
  },
  {
    "url": "assets/js/24.ad67c034.js",
    "revision": "d8f82f9e78cb526b075c1432a7f940d2"
  },
  {
    "url": "assets/js/25.5a847e0b.js",
    "revision": "3f7ab22a2e38609491fb3499abaf20ac"
  },
  {
    "url": "assets/js/26.dd32f5b6.js",
    "revision": "2f4b81b8befaacd32807edab460954ed"
  },
  {
    "url": "assets/js/27.35218f5e.js",
    "revision": "a3b8e3b34adede3dd66a758e5f2767cf"
  },
  {
    "url": "assets/js/28.e63f83db.js",
    "revision": "895788f07b42f03c8661626b79569ffb"
  },
  {
    "url": "assets/js/29.8195f437.js",
    "revision": "7551bf3a9ebfbd821899a19b275ec279"
  },
  {
    "url": "assets/js/3.9ccaf566.js",
    "revision": "2dbe3827fd3a564e816d748e15aa181d"
  },
  {
    "url": "assets/js/30.084f1ed4.js",
    "revision": "75ea9034c791cec990c3652940e3282f"
  },
  {
    "url": "assets/js/4.b29dbee7.js",
    "revision": "31e52454c8f5257cae56a5a258e6d867"
  },
  {
    "url": "assets/js/5.8f4532f0.js",
    "revision": "d7e65f541cf20af6d7608e04a9ecb770"
  },
  {
    "url": "assets/js/6.12eaef9a.js",
    "revision": "1385a54bf9fc49f43d193465dfc7ac7b"
  },
  {
    "url": "assets/js/7.aff8234c.js",
    "revision": "7dd5ab52b5b3b2138aa220259ecbce3d"
  },
  {
    "url": "assets/js/8.6692a2b5.js",
    "revision": "f2852a2be6964b76d14fd39beff4089b"
  },
  {
    "url": "assets/js/9.c588ca51.js",
    "revision": "6c9d35699c3be5076fccb8ee3e029894"
  },
  {
    "url": "assets/js/app.35f7a803.js",
    "revision": "c936d69d8002161a59c4c6d9f24b3ab9"
  },
  {
    "url": "index.html",
    "revision": "7b02450549b05a52368786f7cb0573c6"
  },
  {
    "url": "loadingScreen/Alpha_Omega_Loading_Screen.jpg",
    "revision": "9bc5ab51e128bce8ea207f87421c3489"
  },
  {
    "url": "loadingScreen/Ancient_Evil_Loading_Screen.jpg",
    "revision": "fd6bae1a9ad67e2dcffbb7ee2ed26667"
  },
  {
    "url": "loadingScreen/Blood_of_the_Dead_Loading_Screen.jpg",
    "revision": "e360dca317e9a99f65c51b7255531bb8"
  },
  {
    "url": "loadingScreen/Classified_Loading_Screen.jpg",
    "revision": "347139a958b154e219940fce8ec3133b"
  },
  {
    "url": "loadingScreen/Dead_of_the_Night_Loading_Screen.jpg",
    "revision": "cc6ab5f3786f651ca96906464118fce4"
  },
  {
    "url": "loadingScreen/IX_Loading_Screen.jpg",
    "revision": "e1363304e106667a3e2dd497697c1b75"
  },
  {
    "url": "loadingScreen/Voyage_of_Despair_Loading_Screen.jpg",
    "revision": "f2a90e701553e6a30e1231b2e79040e6"
  },
  {
    "url": "logo/chaos_logo.png",
    "revision": "79318b5e81e7dad135ce524546d2ec83"
  },
  {
    "url": "logo/ether_logo.png",
    "revision": "548f2a9bbd632da70cc8c010a9e52406"
  },
  {
    "url": "logo/Icon-144.png",
    "revision": "618b3cdda6ba40df78b2c460d0da917a"
  },
  {
    "url": "logo/Icon-192.png",
    "revision": "f231283b325120b94919e5b56ac48c9e"
  },
  {
    "url": "logo/Icon-36.png",
    "revision": "00a31f0144fca5a0e04d06abe91690fc"
  },
  {
    "url": "logo/Icon-48.png",
    "revision": "90eb09a59fd9ca67f1e68e9bebbe1119"
  },
  {
    "url": "logo/Icon-512.png",
    "revision": "9f874b7a52e425762e60a55fe4e3eae8"
  },
  {
    "url": "logo/Icon-72.png",
    "revision": "9c657fc9857acac9f11c9139ea50c614"
  },
  {
    "url": "logo/Icon-96.png",
    "revision": "ee4b3b9457bf6d3915686a42935c8c10"
  },
  {
    "url": "logo/logo.png",
    "revision": "6e726fec1c35e97eaf0ce77d143d1459"
  },
  {
    "url": "zh/guide/bo4/alpha_omega/alpha_omega.html",
    "revision": "e633155dbca79cfcd1e4c8c936d5a7dd"
  },
  {
    "url": "zh/guide/bo4/ancient_evil/ancient_evil.html",
    "revision": "7211b5ff89888eae4af56ad35f59c923"
  },
  {
    "url": "zh/guide/bo4/blood_of_the_dead/blood_of_the_dead.html",
    "revision": "e009e410c0b12da39b57a189f658879d"
  },
  {
    "url": "zh/guide/bo4/classified/classified.html",
    "revision": "1bd07bec3957f3a91539565ec5542148"
  },
  {
    "url": "zh/guide/bo4/dead_of_the_night/dead_of_the_night.html",
    "revision": "ea1b0e06b9cbf99878093543b3e6e5fe"
  },
  {
    "url": "zh/guide/bo4/ix/ix.html",
    "revision": "958e2e7c7f18ba203c07a329d27662aa"
  },
  {
    "url": "zh/guide/bo4/voyage_of_despair/voyage_of_despair.html",
    "revision": "76e21f0027b46f87d9fd7bed58156a97"
  },
  {
    "url": "zh/guide/index.html",
    "revision": "82523953c63c7d79bd85492e41f6db6f"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
addEventListener('message', event => {
  const replyPort = event.ports[0]
  const message = event.data
  if (replyPort && message && message.type === 'skip-waiting') {
    event.waitUntil(
      self.skipWaiting().then(
        () => replyPort.postMessage({ error: null }),
        error => replyPort.postMessage({ error })
      )
    )
  }
})
