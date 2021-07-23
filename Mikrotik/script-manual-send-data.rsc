# Variable untuk IP
:global varIp "192.168.66.10";

# Variable untuk status
:global varStatus "1";

/tool fetch http-method=post http-header-field="Content-Type: application/json" \
http-data=("{\"ip\":\"".$varIp."\",\"status\":\"".$varStatus."\"}") \
url="https://script.google.com/macros/s/[ID-GOOGLE-SCRIPT]/exec"


