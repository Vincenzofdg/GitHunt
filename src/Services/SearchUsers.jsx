import GitHub from "./url";

export const SearchUsers = async (username, page) => {
    try {
        const perPage = 10;
        const { data } = await GitHub.get(`/search/users?q=${username}&per_page=${perPage}&page=${page}`,);

        return {
            total: data.total_count,
            users: data.items
        }
    } catch (error) {
        console.error('Erro ao buscar o usuário:', error);
    }
};

export default SearchUsers;
