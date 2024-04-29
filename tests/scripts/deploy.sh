set -e
DEFAULT_ENV=""
POS_ENV="${1:-$DEFAULT_ENV}"
POS_TEST_API_KEY=$(uuidgen)

echo "Linking playwright"
npm link dotenv @playwright/test

pos-cli data clean $POS_ENV --auto-confirm --include-schema
pos-cli deploy $POS_ENV

sed -i -e "/POS_TEST_API_KEY/s/$/$POS_TEST_API_KEY/" ./tests/.env # Append the API key to the .env file
pos-cli constants set $POS_ENV --name _data_export_api_key --value $POS_TEST_API_KEY
