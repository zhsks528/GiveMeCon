import React from "react";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faExclamationTriangle } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import ProduceActions from "components/ProduceActions";
import ProduceComments from "components/ProduceComments";
import TimeStamp from "components/TimeStamp";
import CommentBox from "components/Comments";

const ThumbnailBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 300px;
`;

const Thumbnail = styled.img`
  width: 100%;
  height: 100%;
`;

const NoImageBox = styled(ThumbnailBox)`
  border-radius: 10px;
  background: black;
`;

const NoImage = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  color: #ffcc00;
`;

const NoIcon = styled(FontAwesomeIcon)`
  font-size: 40px;
`;

const ProduceFeedPresenter = ({ productions }) => {
  // productions.map(item => console.log(item));
  return (
    <>
      {productions
        ? productions.map(item => (
            <div key={item.id}>
              {item.images.length > 0 ? (
                <ThumbnailBox>
                  <Thumbnail src={item.images[0].file} alt="썸네일" />
                </ThumbnailBox>
              ) : (
                <NoImageBox>
                  <NoImage>
                    <NoIcon icon={faExclamationTriangle} />
                    <div>No Image</div>
                  </NoImage>
                </NoImageBox>
              )}
              <Link to={`/production/board/${item.id}/`}>{item.title}</Link>
              <div>
                <ProduceActions
                  like={item.likes_count}
                  isLiked={item.is_liked}
                  productionId={item.id}
                />
                <ProduceComments comments={item.comments} />
                <TimeStamp time={item.natural_time} />
                <div>comments = {item.comments_count}</div>
                <CommentBox productionId={item.id} />
              </div>
              <div>
                {/* <img
                      src={item.creator.profile_image}
                      alter="프로필 이미지"
                    /> */}
                <div>By {item.creator.username}</div>
              </div>
            </div>
          ))
        : null}
    </>
  );
};

export default ProduceFeedPresenter;
