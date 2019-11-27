read -p "Are you sure you want to deploy to PRODUCTION? (y/n) " -n 1 -r
echo    # (optional) move to a new line
if [[ ! $REPLY =~ ^[Yy]$ ]]
then
    exit 1
fi
git checkout integration &&
git pull && 
git checkout master &&
git merge integration &&
git pull && 
git push && 
git checkout integration &&
echo -e "\e[32mDEPLOY SUCCEEDED"