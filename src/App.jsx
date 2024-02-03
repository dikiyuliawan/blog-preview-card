import articleLogo from './assets/images/illustration-article.svg'
import { Card, CardActionArea, CardContent, CardMedia, Typography } from '@mui/material'
import './App.css'

function App() {
  // const [count, setCount] = useState(0)

  return (
    <>
    <Card sx={{ maxWidth: 345 }}>
      <CardActionArea>
        <CardMedia component="img" height="140" image={articleLogo} />
      </CardActionArea>
      <CardContent>
        <Typography variant='h5' component="div">HTML & CSS Foundations</Typography>
      </CardContent>
    </Card>
    </>
  )
}

export default App
