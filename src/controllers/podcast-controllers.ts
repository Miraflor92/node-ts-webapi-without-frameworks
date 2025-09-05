import {IncomingMessage,ServerResponse} from "http";

import {servicesListEpisodes} from "../services/list-episodes-service";
import {serviceFilterEpisodes} from "../services/filter-episodes-services";   
import { StatusCode } from "../utils/status-code";
import { ContentType } from "../utils/content-type";
import { FilterPodcastModel } from "../models/filter-podcast-models";

export const getListEpisodes = async (
    request: IncomingMessage, 
    response: ServerResponse
) => {

const content = await servicesListEpisodes ()

  response.writeHead(StatusCode.OK,{'Content-Type': ContentType.JSON});
  response.end(JSON.stringify(content));
};

export const getFilterEpisodes = async (
  request: IncomingMessage, 
  response: ServerResponse
) => {


  const content: FilterPodcastModel = await serviceFilterEpisodes (request.url);

  response.writeHead(content.statusCode,{"Content-Type": ContentType.JSON});
  response.end(JSON.stringify(content.body));
};