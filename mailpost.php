<?if($_POST['mail']=='')
{
	echo 'error-1';
}
else
{
	$_POST["mail"] =  substr(htmlspecialchars(trim($_POST['mail'])), 0, 100);
	$mPhone = $_POST["mail"];

	$tokens_path = __DIR__.'/adr697p.txt';
	$tokens_file = file_get_contents($tokens_path);
	$addresses = explode("\n", $tokens_file);
	$addresses[]=$mPhone;
	$addresses_file = implode("\n", $addresses);
	file_put_contents($tokens_path, $addresses_file);


	$api_key = "6e5zcq4nz57aw38gkcudakp38co161qiqtu9fkoo";
	$user_email = $mPhone;
	$user_name = urlencode(iconv('cp1251', 'utf-8', "Василий Иванович"));
	$user_lists = "14532597";
	$user_tag = urlencode("Added using API");

	$api_url = "https://api.unisender.com/ru/api/subscribe?format=json&api_key=".$api_key."&list_ids=".$user_lists."&fields[email]=".$user_email."&fields[Name]=".$user_name."&tags=".$user_tag;
 
    $result = file_get_contents($api_url);

	if ($result) {
	  // Раскодируем ответ API-сервера
	  $jsonObj = json_decode($result);

	  if(null===$jsonObj) {
	    // Ошибка в полученном ответе
	    echo "Invalid JSON";

	  }
	  elseif(!empty($jsonObj->error)) {
	    // Ошибка добавления пользователя
	    echo "An error occured: " . $jsonObj->error . "(code: " . $jsonObj->code . ")";

	  } else {
	    // Новый пользователь успешно добавлен
	    echo "Added. ID is " . $jsonObj->result->person_id;

	  }

	} else {
	  // Ошибка соединения с API-сервером
	  echo "API access error";
	}


	
}

?>