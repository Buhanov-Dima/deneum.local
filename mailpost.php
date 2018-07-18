<?php if($_POST['phone']=='')
{
	echo 'error-1';
}
else
{
	$_POST["phone"] =  substr(htmlspecialchars(trim($_POST['phone'])), 0, 100);
	$mPhone = $_POST["phone"];

	$_POST["reason"] =  substr(htmlspecialchars(trim($_POST['reason'])), 0, 300);
	$mReason = $_POST["reason"];

	$_POST["name"] =  substr(htmlspecialchars(trim($_POST['name'])), 0, 100);
	$mName = $_POST["name"];

	$office_id = 3194;
	$source_id = 10478;
	 
	$params = [
	    'firstname' => $mName,
	    'phone' => $mPhone,
	    'office_id' => $office_id,
	    'source_id' => $source_id,
];


	$curl = curl_init();
 
    curl_setopt($curl, CURLOPT_URL, 'https://api.crmramex.ru/treatment/create?token=2039.dae843355c3ad46692383f46802f2f78480e64dec2602afc5ccd9410a7a11a8c');
    curl_setopt($curl, CURLOPT_TIMEOUT, 60);
    curl_setopt($curl, CURLOPT_RETURNTRANSFER, true);
 
    if ($params !== null && is_array($params)) {
        curl_setopt($curl, CURLOPT_POST, true);
        curl_setopt($curl, CURLOPT_POSTFIELDS, $params);
    }
    $result = curl_exec($curl);
    curl_close($curl);
 
    print_r(json_decode($result, true));

	
}

?>