import { Button, Typography, Container, Box } from '@mui/material';

const HomePage = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-white">
      <Container maxWidth="lg">
        <Box className="text-center">
          <Typography variant="h2" color="primary" gutterBottom>
            Microservices Inventory System
          </Typography>
          <Typography variant="h5" color="textSecondary" paragraph>
            A powerful inventory system built with microservices to manage product details, order processing, and user authentication.
          </Typography>
          <div className="mt-8">
            <Button variant="outlined" color="secondary" href="/login" className="w-64 mb-6">
              Login
            </Button>
            <Button variant="contained" color="primary" href="/products" className="w-64 mb-6">
              Explore Products
            </Button>
            <Button variant="outlined" color="primary" href="/orders" className="w-64 mb-6">
              View Orders
            </Button>
          </div>
        </Box>
      </Container>
    </div>
  );
};

export default HomePage;