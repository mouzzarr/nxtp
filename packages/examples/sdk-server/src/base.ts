import { FastifyInstance } from "fastify";
import { TypeBoxTypeProvider } from "@fastify/type-provider-typebox";
import { NxtpSdkBase } from "@connext/nxtp-sdk";
import { SdkServerApiXCallSchema, SdkServerApiXCall } from "@connext/nxtp-utils";

import { approveIfNeededSchema, getCanonicalTokenIdSchema, calculateCanonicalKeySchema } from "./types/api";

export const baseRoutes = async (server: FastifyInstance, sdkBaseInstance: NxtpSdkBase): Promise<any> => {
  const s = server.withTypeProvider<TypeBoxTypeProvider>();

  s.post<{ Body: SdkServerApiXCall }>(
    "/xcall",
    {
      schema: {
        body: SdkServerApiXCallSchema,
      },
    },
    async (request, reply) => {
      const txReq = await sdkBaseInstance.xcall(request.body);
      reply.status(200).send(txReq);
    },
  );

  s.post<{ Body: SdkServerApiXCall }>(
    "/wrapEthAndXCall",
    {
      schema: {
        body: SdkServerApiXCallSchema,
      },
    },
    async (request, reply) => {
      const txReq = await sdkBaseInstance.wrapEthAndXCall(request.body);
      reply.status(200).send(txReq);
    },
  );

  s.post(
    "/approveIfNeeded",
    {
      schema: {
        body: approveIfNeededSchema,
      },
    },
    async (request, reply) => {
      const { domainId, assetId, amount, infiniteApprove } = request.body;
      const txReq = await sdkBaseInstance.approveIfNeeded(domainId, assetId, amount, infiniteApprove);
      reply.status(200).send(txReq);
    },
  );

  s.get(
    "/getCanonicalTokenId/:domainId/:tokenAddress",
    {
      schema: {
        params: getCanonicalTokenIdSchema,
      },
    },
    async (request, reply) => {
      const { domainId, tokenAddress } = request.params;
      const res = await sdkBaseInstance.getCanonicalTokenId(domainId, tokenAddress);
      reply.status(200).send(res);
    },
  );

  s.get(
    "/calculateCanonicalKey/:domainId/:tokenId",
    {
      schema: {
        params: calculateCanonicalKeySchema,
      },
    },
    async (request, reply) => {
      const { domainId, tokenId } = request.params;
      const res = sdkBaseInstance.calculateCanonicalKey(domainId, tokenId);
      reply.status(200).send(res);
    },
  );
};
