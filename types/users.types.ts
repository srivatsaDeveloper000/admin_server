export type user_type = {
    user_name: string,
    email: string,
    password: string,
    user_role: string,
    status: string,
};

export type single_user_type = user_type & {
    type: "single"
}

export type bulk_user_type = {
    type: "bulk",
    users: user_type[]
};

export type AddUserPayload = single_user_type | bulk_user_type;