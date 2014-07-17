#pragma strict

var testTexture : Texture;
var a : GameObject;
var b : GameObject;
function Start () {
	a = GameObject.Find("PlateGen");
	b = GameObject.Find("PlateGen2");
	//Graphics.DrawTexture(Rect(Screen.height/2.0-100,Screen.width/2.0-100,200,200),testTexture);
	//Debug.Log("XYZZZZ");
}

function Update () {/*
	var pa = a.transform.position[1];
	var pb = b.transform.position[1];
	if(pa>pb){
		a.transform.Translate(0,-2,0);
		b.transform.Translate(0,2,0);
	}
	else{
		a.transform.Translate(0,2,0);
		b.transform.Translate(0,-2,0);
	}*/
}

function OnGUI () {
	if(GUI.Button(Rect(0,0,100,100),"Click"))
	{
		OnClick();
		Debug.Log("XX");
	}
}

function OnClick () {
	var pa = a.transform.position[1];
	var pb = b.transform.position[1];
	if(pa>pb){
		a.transform.Translate(0,-2,0);
		b.transform.Translate(0,2,0);
	}
	else{
		a.transform.Translate(0,2,0);
		b.transform.Translate(0,-2,0);
	}
}