import GitHub from "./url";

export const UserInfo = async (username) => {
    try {
        const { data } = await GitHub.get(`/users/${username}`,);
        return {
            foto: data.avatar_url,
            name: data.name,
            username: data.login,
            followers: data.followers,
            following: data.following,
        }
    } catch (error) {
        console.error('Erro ao buscar o usuário:', error);
    }
};

export default UserInfo;
