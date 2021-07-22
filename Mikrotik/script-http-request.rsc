# Variable untuk IP
:global varIp;

# Variable untuk status
:global varStatus;

/tool fetch http-method=post http-header-field="Content-Type: application/json" \
http-data=("{\"ip\":\"".$varIp."\",\"status\":\"".$varStatus."\"}") \
url="https://script.google.com/macros/s/[ID-GOOGLE-SCRIPT]/exec"


