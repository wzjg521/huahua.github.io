import Server from './server';

class API extends Server{
  /**
   *  用途：上传图片
   *  @url ://XXXXXX
   *  返回status为1表示成功
   *  @method post
   *  @return {promise}
   */
  async uploadImg(params = {}){
    try{
      let result = await this.axios('post', '://XXXXXX', params); 
      if(result && result.status === 1){
        return result;
      }else{
        let err = {
          tip: '提交失败',
          response: result,
          data: params,
          url: '://XXXXXX',
        }
        throw err;
      }
    }catch(err){
      throw err;
    }
  }

  /**
   *  用途：获取数据
   *  @url ://XXXXXX
   *  返回http_code为200表示成功
   *  @method get
   *  @return {promise}
   */
  async getRecord(params = {}){
    try{
      let result = await this.axios('get', `/api/searchstocktab?version=${params.version}`);
      if(result){
        return result;
      }else{
        let err = {
          tip: '获取数据失败',
          response: result,
          data: params,
          url: '/api/searchstocktab',
        }
        throw err;
      }
    }catch(err){
      throw err;
    }
  }

}

export default new API();