var body = $response.body;
var obj = JSON.parse(body);
const ad = /api\/service\/(home\/index|banner\/myPage)/;
const adv = /api\/play\/(advert\/info|listening\/entrance\/music)/;
const top = /api\/(search\/topic\/word\/list|playlist\/collect\/all|voice\/room\/sidebar)/;

if (ad.test($request.url)) {
   obj.data.bannerList = [];
   //if (obj.data.moduleList && obj.data.moduleList.length > 0) {
  obj.data.moduleList = obj.data.moduleList.filter(item => item.name !== "轮播图" && item.name !== "波点实验室");
}

if (adv.test($request.url)) {
   obj.data.entranceMusic = {};
   obj.data.advert = {};
}
if (top.test($request.url)) {
   obj.data = {};
}

$done({ body: JSON.stringify(obj) });
