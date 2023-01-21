
class MarvellService {
    _apiKey = `apikey=940c124b4738dd3287c29e4dfda8a97d`;
    _apiUrl = `https://gateway.marvel.com:443/v1/public/`;

    getResource = async (url) => {
        let res = await fetch(url)

        if (res.status !== 200) {
            throw new Error(`Could not fetch ${url}, status: ${res.status}`)
        }
        return await res.json();
    }
    getAllCharacters = async ()=>{
        const res = await this.getResource(`${this._apiUrl}characters?limit=9&offset=210&${this._apiKey}`)
        return res.data.results.map(this._transformCharacter());
    }

    getCharacter = async (id)=>{
        const res =  await this.getResource(`${this._apiUrl}characters/${id}?${this._apiKey}`)
        return this._transformCharacter(res.data.results[0]);
    }

    _transformCharacter = (char) =>{
        return{
            name:char.name,
            description:char.description,
            thumbnail:char.thumbnail.path + '.' + char.thumbnail.extension,
            homepage:char.url,
            wiki:char.url
        }
    }
}

export default MarvellService;