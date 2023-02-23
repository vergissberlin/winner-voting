// Competition
export const getCompetion = async (id) => {
    const competition = await competionCollection.doc(id).get();
    return competition.exists ? competition.data() : null;
}

export const createCompetition = competition => {
    return competionCollection.add(competition);
}

export const updateCompetition = async (id, competition) => {
    await competionCollection.doc(id).update(competition);
}

export const deleteCompetition = async (id) => {
    await competionCollection.doc(id).delete();
}

