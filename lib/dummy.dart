import 'package:flutter/material.dart';

class Dummy extends StatefulWidget {
  @override
  _DummyState createState() => _DummyState();
}

class _DummyState extends State<Dummy> {
  ///Page Controller for the PageView
  final controller = PageController(
    initialPage: 0,
  );
  var scrollDirection = Axis.horizontal;
  var actionIcon = Icons.swap_vert;

  @override
  Widget build(BuildContext context) {
    Size _screenSize = MediaQuery.of(context).size;
    return Scaffold(
      ///A Page View with 3 children
      body: Column(
        children: [
          Expanded(
            child: PageView(
              controller: controller,
              scrollDirection: scrollDirection,

              ///Enable physics property to provide your PageView with a
              ///custom scroll behaviour
              ///Here BouncingScrollPhysics will pull back the boundary
              ///item (first or last) if the user tries to scroll further.
              //physics: BouncingScrollPhysics(),
              pageSnapping: true,
              children: <Widget>[
                Container(
                  color: Colors.white,
                  width: MediaQuery.of(context).size.width * .9,
                  child: Card(
                    color: Colors.lightBlue,
                    elevation: 4,
                    margin: EdgeInsets.all(24),
                    child: Center(
                      child: Text(
                        "Card 1",
                        style: TextStyle(color: Colors.white, fontSize: 24),
                      ),
                    ),
                  ),
                ),
                Container(
                  color: Colors.white,
                  child: Card(
                    color: Colors.purpleAccent,
                    elevation: 4,
                    margin: EdgeInsets.all(24),
                    child: Center(
                      child: Text(
                        "Card 2",
                        style: TextStyle(color: Colors.white, fontSize: 24),
                      ),
                    ),
                  ),
                ),
                Container(
                  color: Colors.white,
                  child: Card(
                    color: Colors.pink,
                    elevation: 4,
                    margin: EdgeInsets.all(24),
                    child: Center(
                      child: Text(
                        "Card 3",
                        style: TextStyle(color: Colors.white, fontSize: 24),
                      ),
                    ),
                  ),
                ),
              ],
            ),
          ),
        ],
      ),
    );
  }
}
