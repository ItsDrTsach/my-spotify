import React from "react";
import styled from "styled-components";
import { Skeleton } from "./Skeleton";

export const Title = styled.div`
  font-size: 30px;
  font-weight: bold;
  margin-bottom: 20px;
`;

export const Label = styled.div`
  font-weight: 600;
  margin-bottom: 10px;
`;

export const Detail = ({ label, value }) => (
  <div>
    <Label>{label}</Label>
    <div style={{ wordBreak: "break-word" }}>{value}</div>
  </div>
);

export const DetailFallback = ({ label }) => (
  <div>
    <Label>{label}</Label>
    <Skeleton style={{ height: 18, borderRadius: 9 }} />
  </div>
);
