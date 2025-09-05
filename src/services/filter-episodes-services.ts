import { IncomingMessage } from "http";
import { repositoryPodcast } from "../repositories/podcasts-repository"
import { FilterPodcastModel } from "../models/filter-podcast-models";
import { StatusCode } from "../utils/status-code";


export const serviceFilterEpisodes = async (
  podcastName: string | undefined
): Promise<FilterPodcastModel> => {


  let responseFormat: FilterPodcastModel = {
      statusCode: 0,
      body: []
  };
  const queryString = podcastName?.split("?p=")[1] || "";


    const data = await repositoryPodcast(queryString);

if (data.length !== 0){
    responseFormat.statusCode = StatusCode.OK;
    responseFormat.body = data;
}else{
    responseFormat.statusCode = StatusCode.NOT_FOUND;
  }

  responseFormat.body = data;

  return responseFormat;
}