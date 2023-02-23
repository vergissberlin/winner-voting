
// User
export const createUser = user => {
    return usersCollection.add(user);
};

export const getUser = async (uid) => {
    const user = await usersCollection.doc(uid).get();
    return user.exists ? user.data() : null;
}

const updateUser = async (uid, user) => {
    await usersCollection.doc(uid).update(user);
};

const deleteUser = async (uid) => {
    await usersCollection.doc(uid).delete();
};
