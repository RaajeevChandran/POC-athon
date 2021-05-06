import 'package:cloud_firestore/cloud_firestore.dart';
import 'package:flutter/material.dart';
import 'package:provider/provider.dart';
import 'package:votefromhome/providers/userProvider.dart';
import 'package:votefromhome/registerVC.dart';

class HomeScreen extends StatefulWidget {
  @override
  _HomeScreenState createState() => _HomeScreenState();
}

class _HomeScreenState extends State<HomeScreen> {
  @override
  Widget build(BuildContext context) {
    UserProvider userProvider =
        Provider.of<UserProvider>(context, listen: true);
    // print(userProvider.currentUser.username);
    CollectionReference users =
        FirebaseFirestore.instance.collection('unsignedVC');

    return Scaffold(
        body: SafeArea(
      child: Scaffold(
          backgroundColor: Color(0xFFF0F0EF),
          body: Center(
              child: Column(
            mainAxisAlignment: MainAxisAlignment.center,
            children: [
              Image.asset('assets/images/character.gif'),
              Text(
                  'Uh Oh! Looks like you are UNREGISTERED! \n \tContinue to register with our partner',
                  style:
                      TextStyle(fontSize: 20.0, fontWeight: FontWeight.bold)),
                      SizedBox(height: 20,),
              OutlinedButton(onPressed: (){
                Navigator.push(context, MaterialPageRoute(builder: (context)=>RegisterVC()));
              },child: Padding(
                padding: const EdgeInsets.all(10.0),
                child: Text('Continue',style:TextStyle(fontSize: 19.0)),
              ),)
            ],
          ))),
    ));
  }
}
