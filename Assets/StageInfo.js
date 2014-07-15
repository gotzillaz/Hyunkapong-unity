#pragma strict

public static var stageNO : int;
public static var mapPath : String;
public static var startPoint : int[];
public static var endPoint : int[];
public static var size : int;
public static var colorNum : int;
public static var colorList : String[];

function Start () 
{
	ChangeStage(1);
	//Debug.Log(mapPath);
}

public static function ChangeStage(newStage : int)
{
	stageNO = newStage;
	mapPath = "Assets/maps/"+stageNO+".in";
	var sr = new File.OpenText(mapPath);
	var input = "";
	size = parseInt(sr.ReadLine());
	colorNum = parseInt(sr.ReadLine());
	colorList = sr.ReadLine().Trim().Split();
	for(var i = 0;i<size;i++)
	{
		input = sr.ReadLine();
	}
	sr.Close();
	ShowStageInfo();
}

public static function ShowStageInfo()
{
	Debug.Log("Stage NO : " + stageNO);
	Debug.Log("Map Path : " + mapPath);
	Debug.Log("Map Size : " + size);
	Debug.Log("Color Num : " + colorNum);
	Debug.Log("Color List : ");
	for(var i=0;i<colorList.length;i++)
	{
		Debug.Log(colorList[i]);
	}
}