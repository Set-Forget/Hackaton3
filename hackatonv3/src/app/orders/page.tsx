import { Container, Typography, Grid, Box, Card, CardContent, Button, TextField } from '@mui/material';

const OrderProcessingPage = () => {
  return (
    <div className="min-h-screen bg-white">
      <Container maxWidth="lg">
        <Typography variant="h2" color="primary" align="center" gutterBottom>
          Order Processing
        </Typography>

        <Typography variant="h5" color="textSecondary" align="center" paragraph>
          Complete your order by selecting products, reviewing your cart, and proceeding with payment.
        </Typography>
        <Grid container spacing={4}>
          <Grid item xs={12} sm={6} md={4} lg={3}>
            <Card>
              <CardContent>
                <Typography variant="h6" color="primary">
                  Product Name
                </Typography>
                <Typography variant="body2" color="textSecondary">
                  Short description of the product.
                </Typography>
                <Typography variant="body2" color="textSecondary">
                  Quantity: 2
                </Typography>
                <Typography variant="body2" color="textSecondary">
                  Price: $50
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        </Grid>

        <Box className="mt-8">
          <Typography variant="h6" color="primary" gutterBottom>
            Payment Information
          </Typography>

          <TextField
            label="Full Name"
            variant="outlined"
            fullWidth
            className="mb-4"
          />
          <TextField
            label="Email Address"
            variant="outlined"
            fullWidth
            className="mb-4"
          />
          <TextField
            label="Shipping Address"
            variant="outlined"
            fullWidth
            multiline
            rows={4}
            className="mb-4"
          />

          <Button variant="contained" color="primary" fullWidth>
            Confirm Order and Pay
          </Button>
        </Box>
      </Container>
    </div>
  );
};

export default OrderProcessingPage;
