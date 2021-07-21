class netwatch {
  constructor() {
    let ss = SpreadsheetApp.getActive();
    this.wsMoni = ss.getSheetByName('Monitoring');
    this.wsLog = ss.getSheetByName('Log');
    this.wsHis = ss.getSheetByName('History');
  }
  writeLog(msg){
    this.wsLog.appendRow([new Date(), msg]);
  }
  writeHistory(waktu,ip,status){
    this.wsHis.appendRow([waktu,ip,status]);
  }
  updateMonitoring(ip,status){
    let arrIP = this.wsMoni.getRange(2,3,this.wsMoni.getLastRow()-1,1).getValues();
    arrIP = arrIP.map(function(r){
      return r[0];
    });
    
    let indexIP = arrIP.indexOf(ip);
    let now = new Date();
    if(indexIP >= 0){
      this.wsMoni.getRange(indexIP+2,4,1,2).setValues([[status,now]]);
      this.writeHistory(now, ip, status);
    }
  }
}
// function test(){
//   let nw = new netwatch;
//   nw.updateMonitoring('192.168.66.20','1');
// }
function doPost(e) {
  // https://developers.google.com/apps-script/guides/web
  let nw = new netwatch;
  if(typeof e.postData.contents !='undefined'){
    let data = JSON.parse(e.postData.contents); 
    nw.updateMonitoring(data.ip, data.status);
  }
  else 
    nw.writeLog('Parameter tidak valid');
}