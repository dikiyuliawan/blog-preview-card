import articleLogo from './assets/images/illustration-article.svg'
import avatarImg from './assets/images/image-avatar.webp'
import { Avatar, Card, CardActionArea, CardContent, CardMedia, Chip, Stack, Typography } from '@mui/material'
import './App.css'

function App() {
  // const [count, setCount] = useState(0)

  return (
    <>
    <Card sx={{ maxWidth: 345, padding: 1 }}>
      <CardActionArea sx={{paddingLeft: 2, paddingRight: 2}}>
        <CardMedia component="img" height="140" image={articleLogo} />
      </CardActionArea>
      <CardContent>
        <Chip label="Learning" size='small' sx={{bgcolor: "#E3D026", borderRadius: 0, marginBottom: 1}} />
        <Typography variant='body1' pb={1}>Published 18 February 2024</Typography>
        <Typography gutterBottom variant="h5">HTML & CSS Foundations</Typography>
        <Typography variant="body2" color="text.secondary">These languages are the backbone of every website, defining structure, content, and presentation</Typography>
        <Stack direction="row" pt={2}>
          <Avatar src={avatarImg}/>
          <Typography variant='body3' sx={{padding: 1, fontWeight: 600}}>Greg Hooper</Typography>
        </Stack>
      </CardContent>
    </Card>
    </>
  )
}

export default App
