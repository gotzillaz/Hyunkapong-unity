#pragma strict
var startButton : Texture;
var background : Texture;
var screenTop : Texture;
var screenBottom : Texture;
var logoPic : Texture;
var style : GUIStyle;
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
	//GUI.Box(new Rect(0,0,Screen.width*resizeRatio,Screen.height*resizeRatio),background,style);
	GUI.DrawTexture(new Rect(Screen.width/2.0-Screen.width*resizeRatio2/2,Screen.height*0.02,Screen.width*0.9,Screen.width*0.9/logoPic.width*logoPic.height),logoPic);

	//GUI.Box(new Rect(Screen.width/2.0-Screen.width*resizeRatio2/2,0,Screen.width*resizeRatio2,Screen.height*resizeRatio2),logoPic,GUIStyle.none);
	//GUI.Box(new Rect(0,0,Screen.width*resizeRatio,Screen.height*resizeRatio),screenTop,GUIStyle.none);
	//GUI.Box(new Rect(0,0,Screen.width*resizeRatio,Screen.height*resizeRatio),screenBottom,GUIStyle.none);
	var playSize : float = Screen.width*0.6;
	var playRect : Rect = new Rect(Screen.width/2-playSize/2,Screen.height*0.6-playSize/2,playSize,playSize);
	GUI.DrawTexture(playRect,startButton);
	if(GUI.Button(playRect,"",GUIStyle.none))
	{
		Debug.Log("GG");
		if((playRect.center - Event.current.mousePosition).magnitude <= playSize/2.0)
		{
			StageInfo.ChangeStage(2);
			//Debug.Log(StageInfo.mapPath);
			Application.LoadLevel("GameScene");
		}
	}
}