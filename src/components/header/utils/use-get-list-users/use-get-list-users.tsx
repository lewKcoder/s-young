import { useEffect, useState } from 'react';

export const useGetListUsers = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const REGION = process.env.NEXT_PUBLIC_REGION;
    const ACCESSKEY_ID = process.env.NEXT_PUBLIC_ACCESSKEY_ID;
    const SECRET_ACCESS_KEY = process.env.NEXT_PUBLIC_SECRET_ACCESS_KEY;
    const USER_POOL_ID = process.env.NEXT_PUBLIC_USER_POOL_ID;

    const AWS = require('aws-sdk');
    AWS.config.update({
      region: REGION,
      accessKeyId: ACCESSKEY_ID,
      secretAccessKey: SECRET_ACCESS_KEY,
    });

    const cognito = new AWS.CognitoIdentityServiceProvider();
    const userPoolId = USER_POOL_ID;
    cognito.listUsers({ UserPoolId: userPoolId }, (err: any, data: any) => {
      if (err) {
        console.error('Error fetching users:', err);
      } else {
        setUsers(data.Users);
      }
    });
  }, []);

  return users;
};
