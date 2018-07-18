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


	
}

?>