import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { BarcodeScanner } from '@ionic-native/barcode-scanner';
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  qrData:null
  createdCode:null
  scannedCode:String
  constructor(private barcodescanner : BarcodeScanner,public navCtrl: NavController) {

  }
  createCode(){
    this.createdCode = this.qrData;
  }
  scanCode(){
    this.barcodescanner.scan().then(barcodeData =>{
      this.scannedCode = barcodeData.text;
    })
  }

}
