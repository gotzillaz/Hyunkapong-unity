#pragma strict
import System.IO;

var startButton : Texture;
var background : Texture;
var screenTop : Texture;
var screenBottom : Texture;
var logoPic : Texture;

function OnGUI()
{
	//var startButton : Texture;
	//Debug.Log(Screen.width+" "+background.width);
	var screenRatio : float = parseFloat(Screen.height)/Screen.width;
	var bgRatio : float = parseFloat(background.height)/background.width;
	var logoRatio : float = parseFloat(logoPic.height+600)/logoPic.width;
	var resizeRatio : float = bgRatio/screenRatio;
	var resizeRatio2 : float = logoRatio/screenRatio;
	//Debug.Log(resizeRatio+" "+bgRatio+" "+screenRatio);
	GUI.DrawTexture(new Rect(0,0,Screen.width,Screen.height),background);
	//GUI.Box(new Rect(Screen.width/2.0-Screen.width*resizeRatio2/2,0,Screen.width*resizeRatio2,Screen.height*resizeRatio2),logoPic,GUIStyle.none);
	GUI.DrawTexture(new Rect(0,0,Screen.width,Screen.height),screenTop);
	GUI.DrawTexture(new Rect(0,0,Screen.width,Screen.height),screenBottom);
	/*var playSize : float = Screen.width*0.6;
	if(GUI.Button(new Rect(Screen.width/2-playSize/2,Screen.height*0.6-playSize/2,playSize,playSize),startButton,GUIStyle.none))
	{
		Debug.Log("GG");
		Application.LoadLevel("GameScene");
	}
	var filePath : String = "Assets/maps/1.in";
	var sr = new File.OpenText(filePath);
	var input = "";
	while(true)
	{
		input = sr.ReadLine();
		if(input == null) break;
		Debug.Log(input);
	}*/
}