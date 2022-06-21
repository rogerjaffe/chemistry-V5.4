#!/bin/bash

# Update function code
source ../aws.prod.env
aws lambda update-function-code \
  --function-name "$FUNCTION" \
  --zip-file "fileb://./$FUNCTION.zip" \
  --region "$AWS_REGION" \
  --profile $AWS_PROFILE

