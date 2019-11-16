import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import ProduceDetailPresenter from "./ProduceDetailPresenter";
import { getDetailProduction } from "store/actions/production";

export default function ProduceDetailContainer() {
  const dispatch = useDispatch();

  const detailData = useSelector(state => state.production.detailData);

  /* URL에서 params 받아오기 */
  const getUrlParams = () => {
    const params = {};
    window.location.search.replace(/[?&]+([^=&]+)=([^&]*)/gi, function(
      str,
      key,
      value
    ) {
      params[key] = value;
    });

    return params;
  };

  useEffect(() => {
    const params = getUrlParams();
    let productionId = params.id;
    dispatch(getDetailProduction(productionId));
  }, [dispatch]);

  return <ProduceDetailPresenter detailData={detailData} />;
}
