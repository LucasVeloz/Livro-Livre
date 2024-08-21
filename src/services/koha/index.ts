import { KohaApi } from './factory';

async function fetchCasaData() {
  
    const user = await KohaApi.me.get();
   
    return user;
}
fetchCasaData();