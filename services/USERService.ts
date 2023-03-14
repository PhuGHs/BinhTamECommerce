import { UserModel } from "@/models/User";
import { connectToDatabase } from "@/utils/connectdb";
import { IUser, UserData } from "@/utils/interfaces";

const handleUserLogin = (email: string, password: string)  => {
  return new Promise(async (resolve, reject) => {
    try {
      let userData: UserData;
      let doExist = await checkUserEmail(email);
      if (doExist) {
        let user = await getUserByEmail(email);
        if (user) {
          if (password === user.password) {
            delete user[password];
            userData = { errCode: 0, message: "OK", user: user };
          } else {
            userData = { errCode: 3, message: "Wrong password" };
          }
        } else {
          userData = { errCode: 2, message: "User doesn't exist" };
        }
        resolve(userData);
      } else {
        userData = {errCode: 1, message: "provided email doesn't exist"}
        resolve(userData);
      }
    } catch (e) {
      console.log(e);
      reject(e);
    }
  });
};

const getUserByEmail = async (email : string) => {
    try {
        const user : IUser | null = await UserModel.findOne({email: email})
        if (!user) {
            return null;
        }
        return user;
    } catch(e) {
        console.log(e);
    }
}

const checkUserEmail = (email : string) => {
    return new Promise(async (resolve, reject) => {
        try {
            let user = await UserModel.findOne({email});
            if(user) {
                resolve(true);
            } else {
                resolve(false);
            }
        } catch(e) {
            reject(e);
        }
    })
}

const getUsers = async () => {
    try {
        await connectToDatabase();
        const users : IUser[] | null = await UserModel.find({}); // => promise(.) 
        if(!users) {
            return []
        }
        return users;
    } catch(e) {
        console.log(e);
    }
}

const deleteUserById = async (email : string) => {
    try {
        await connectToDatabase();
        await UserModel.deleteOne({email})
    } catch(e) {
        console.log(e);
    }
}

const createUser = async (info : any) => {
    try {
        await connectToDatabase();
        const userInfo = new UserModel({
            name: info.name,
            email: info.email,
            password: info.password,
        })
    
        await userInfo.save();
    } catch(e) {
        console.log(e);
    }
}

export {
    handleUserLogin,
    getUserByEmail,
    getUsers,
    deleteUserById,
    createUser
}