#pragma strict
import System.IO;

var startButton : Texture;
var background : Texture;
var screenTop : Texture;
var screenBottom : Texture;
var logoPic : Texture;
var stageLabel : GUIStyle;

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
//	GUI.DrawTexture(new Rect(0,0,Screen.width,Screen.height),background);
	//GUI.Box(new Rect(Screen.width/2.0-Screen.width*resizeRatio2/2,0,Screen.width*resizeRatio2,Screen.height*resizeRatio2),logoPic,GUIStyle.none);
//	GUI.DrawTexture(new Rect(0,0,Screen.width,Screen.height),screenTop);
//	GUI.DrawTexture(new Rect(0,0,Screen.width,Screen.height),screenBottom);
	stageLabel.fontSize = Screen.height*0.1;
	stageLabel.padding = new RectOffset(0,0,Screen.height*0.025,0);
	GUI.Label(new Rect(0,0,Screen.width,Screen.height),"Stage " + StageInfo.stageNO,stageLabel);
	//stageLabel
}