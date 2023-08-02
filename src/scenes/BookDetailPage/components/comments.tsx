import React from 'react';
import s from '@/scenes/BookDetailPage/book_detail.module.scss';
import {
  Avatar,
  IconButton,
  ListItem,
  ListItemText,
  Stack,
  TextField,
  Typography,
} from '@mui/material';
import Avatar1 from '@/public/assets/booklist/avatars/avatar-1.png';
import {
  CheckCircle,
  FavoriteBorder,
  MessageOutlined,
  MoreHoriz,
} from '@mui/icons-material';

const Comments = () => {
  return (
    <div className={s.comments}>
      <div className={s.comment}>
        <div className={s.thumbnail}>
          <Avatar src={Avatar1.src} />
        </div>

        <div>
          <div className={s.name}>
            <ListItem
              sx={{ pl: 0, pt: 0 }}
              secondaryAction={
                <IconButton edge="end" aria-label="delete">
                  <MoreHoriz />
                </IconButton>
              }
            >
              <ListItemText
                primary={
                  <Stack direction="row" alignItems="center">
                    <Typography variant="h6">안녕 나 응애 </Typography>
                    <IconButton disabled>
                      <CheckCircle color="success" />
                    </IconButton>
                    <Typography variant="body2" color="text.secondary">
                      1일전
                    </Typography>
                  </Stack>
                }
              />
            </ListItem>
          </div>

          <div className={s.txt}>
            <Typography variant="body1">
              어머 제가 있던 테이블이 제일 반응이 좋았나보네요🤭 우짤래미님도
              아시겠지만 저도 일반인 몸매 그 이상도 이하도 아니잖아요?! 그런
              제가 기꺼이 도전해봤는데 생각보다 괜찮았어요! 오늘 중으로 라이브
              리뷰 올라온다고 하니 꼭 봐주세용~!🥰
            </Typography>

            <IconButton>
              <FavoriteBorder />
              <Typography sx={{ m: '.2rem 0 0 .4rem' }}>3</Typography>
            </IconButton>

            <IconButton>
              <MessageOutlined />
              <Typography sx={{ m: '.2rem 0 0 .4rem' }}>5</Typography>
            </IconButton>
          </div>

          <div className={s.replies}>
            <div className={s.comment}>
              <div className={s.thumbnail}>
                <Avatar src={Avatar1.src} />
              </div>

              <div>
                <div className={s.name}>
                  <ListItem
                    sx={{ pl: 0, pt: 0 }}
                    secondaryAction={
                      <IconButton edge="end" aria-label="delete">
                        <MoreHoriz />
                      </IconButton>
                    }
                  >
                    <ListItemText
                      primary={
                        <Stack direction="row" alignItems="center">
                          <Typography variant="h6">ㅇㅅㅇ</Typography>
                          <IconButton disabled>
                            <CheckCircle color="success" />
                          </IconButton>
                          <Typography variant="body2" color="text.secondary">
                            1일전
                          </Typography>
                        </Stack>
                      }
                    />
                  </ListItem>
                </div>

                <div className={s.txt}>
                  <Typography variant="body1">
                    오 대박! 라이브 리뷰 오늘 올라온대요? 챙겨봐야겠다
                  </Typography>

                  <IconButton>
                    <FavoriteBorder />
                    <Typography sx={{ m: '.2rem 0 0 .4rem' }}>3</Typography>
                  </IconButton>

                  <IconButton>
                    <MessageOutlined />
                    <Typography sx={{ m: '.2rem 0 0 .4rem' }}>5</Typography>
                  </IconButton>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <TextField
        id="outlined-multiline-static"
        label="댓글을 남겨주세요."
        multiline
        rows={1}
        variant="outlined"
        fullWidth
        // start icon
        InputProps={{
          startAdornment: <MessageOutlined />,
        }}
        sx={{ mt: '2rem' }}
      />
    </div>
  );
};

export default Comments;
