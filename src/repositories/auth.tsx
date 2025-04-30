import { supabase } from "../lib/supabase";

type SignupResult = {
    id: string;
    email: string;
    userName: string;
};

export const authRepository = {
    async signup(name: string, email: string, password: string): Promise<SignupResult> {
        const {data, error} = await supabase.auth.signUp ({
            email,
            password,
            options: {data: { name }},
        });

        if(error !== null) throw new Error(error.message);
        if (!data.user) { throw new Error("User data is missing"); }

        return {
            id: data.user.id,
            email: data.user.email ?? "",
            userName: data.user.user_metadata.name
        }
    },

    async signin(email: string, password: string): Promise<SignupResult> {
        const { data, error } = await supabase.auth.signInWithPassword({
            email,
            password,
        });
        if(error !== null) throw new Error(error.message);

        return {
            id: data.user.id,
            email: data.user.email ?? "",
            userName: data.user.user_metadata.name
        }
    }
}