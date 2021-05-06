import 'dart:io';

import 'package:firebase_storage/firebase_storage.dart';

class DB{
  FirebaseStorage _storage = FirebaseStorage.instance;

  Future<void>  addImages(String username,File img1,File img2) async {
    Reference reference = _storage.ref().child('aadhar-img').child(username+DateTime.now().toString());
    Reference reference2 = _storage.ref().child('aadhar-holding').child(username+DateTime.now().toString());
    UploadTask up1 = reference.putFile(img1);
    UploadTask up2 = reference2.putFile(img2);
    Set<String> dl1 = await up1.then((res)async=>{await res.ref.getDownloadURL()});
    Set<String> dl2 = await up2.then((res) async => {await res.ref.getDownloadURL()});
    print(dl1.first);
  }

}