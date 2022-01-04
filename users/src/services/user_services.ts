import User from "../database/repository/users/user.model";

export const signupUserService = async (email: string) => {
    try {
            //  const user = new User();
        // @ts-ignore
           const user = await User.findByCredentials(email);
        console.log('====================================');
        console.log(user);
        console.log('====================================');
        if (!user) throw new Error(" something went wrong with method inside model!");
        return user;
    } catch (err: any) {
        console.log('====================================');
        console.log(err);
        console.log('====================================');
    }
};

export const verifyOtpService = async (id:string,otp:string) => {
    try {
        // @ts-ignore
        const user = await User.userOtpVerify(id, otp);
        console.log('====================================');
        console.log(user);
        console.log('====================================');
        //@ts-ignore
        const token = await user.generateAuthToken();
        console.log('====================================');
        console.log(token);
        console.log('====================================');
        //error handling left
        return user ;
    } catch (err) {
        console.log('====================================');
        console.log(err);
        console.log('====================================');
    }
};

export const updateUserService = async (data:any,id:string) => {
    try {
        let updatedObject = { ...data, profileImage: data.profileImage };
        const updateUser = await User.findByIdAndUpdate(id, updatedObject, { new: true });
        if (!updateUser) throw new Error("something went wrong while updating user!!");

       return updateUser;
        
    } catch (err) {
        console.log('====================================');
        console.log(err);
        console.log('====================================');
    }
}