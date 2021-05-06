import 'dart:io';

import 'package:dotted_border/dotted_border.dart';
import 'package:firebase_storage/firebase_storage.dart';
import 'package:flutter/material.dart';
import 'package:image_picker/image_picker.dart';
import 'package:platform_action_sheet/platform_action_sheet.dart';
import 'package:rounded_loading_button/rounded_loading_button.dart';

class RegisterVC extends StatefulWidget {
  @override
  _RegisterVCState createState() => _RegisterVCState();
}

RoundedLoadingButtonController controller = RoundedLoadingButtonController();

class _RegisterVCState extends State<RegisterVC> {
  File _image, _image2;
  @override
  Widget build(BuildContext context) {
    return SafeArea(
      child: Scaffold(
        appBar: AppBar(
          title: Text('Enter details to submit to verifier'),
          automaticallyImplyLeading: false,
          centerTitle: true,
          backgroundColor: Colors.black,
        ),
        body: SingleChildScrollView(
                  child: Center(
            child: Column(children: [
              SizedBox(height: 20),
              buildTextField('Enter your name'),
              SizedBox(height: 20),
              buildTextField('Enter your Aadhar number'),
              SizedBox(
                height: 20,
              ),
              GestureDetector(
                onTap: () => openSheet(isAfter: true),
                child: DottedBorder(
                  child: Column(
                    children: [
                      _image == null
                          ? Image.asset(
                              'assets/images/aadhar.png',
                              width: 250,
                              height: 250,
                            )
                          : Image.file(_image, width: 250, height: 250),
                      // SizedBox(height: 1,),
                      Text('Add your Aadhar document '),
                      SizedBox(
                        height: 3,
                      )
                    ],
                  ),
                ),
              ),
              SizedBox(height: 10),
              GestureDetector(
                onTap: () => openSheet(isAfter: false),
                child: DottedBorder(
                  child: Column(
                    children: [
                      _image2 == null
                          ? Image.asset('assets/images/hold2.png',
                              height: 250, width: 250)
                          : Image.file(
                              _image2,
                              width: 250,
                              height: 250,
                            ),
                      Text('Add a image of yourself holding your Aadhar')
                    ],
                  ),
                ),
              ),
              SizedBox(height: 20),
              RoundedLoadingButton(
                  controller: controller,
                  onPressed: () {
                  
                  },
                  child: Text('Submit to verify'))
            ]),
          ),
        ),
      ),
    );
  }

  void openSheet({bool isAfter}) {
    PlatformActionSheet().displaySheet(context: context, actions: [
      ActionSheetAction(
        text: "Take Picture",
        onPressed: () => getImage(ImageSource.camera, context, isAfter),
      ),
      ActionSheetAction(
        text: "Choose picture from gallery",
        onPressed: () => getImage(ImageSource.gallery, context, isAfter),
      ),
    ]);
  }

  Future getImage(
      ImageSource source, BuildContext context, bool isAfter) async {
    final result = await ImagePicker.platform.pickImage(source: source);
    Navigator.pop(context);
    if (result != null) {
      print("file picked");
      File file = File(result.path);
      if (isAfter) {
        setState(() {
          _image = file;
        });
      } else {
        setState(() {
          _image2 = file;
        });
      }
    }
  }

  Widget buildTextField(String label) {
    return Center(
      child: Container(
          width: MediaQuery.of(context).size.width * .75,
          height: 54,
          decoration: BoxDecoration(
              border: Border.all(color: Color(0xFFF313039), width: 3),
              borderRadius: BorderRadius.circular(20)),
          child: Padding(
            padding: EdgeInsets.all(8.0),
            child: TextFormField(
              style: TextStyle(color: Color(0xFFF191720)),
              cursorColor: Colors.black,
              decoration: InputDecoration(
                  border: InputBorder.none,
                  hintText: label,
                  hintStyle: TextStyle(
                      color: Color(0xFFF7c7d89), fontWeight: FontWeight.bold)),
            ),
          )),
    );
  }
}
