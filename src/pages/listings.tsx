import { motion } from 'motion/react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { 
  MapPin, 
  Bed, 
  Bath, 
  Square, 
  Heart,
  Filter,
  Search,
  ChevronDown,
  DollarSign,
  TrendingUp,
  Home
} from 'lucide-react';
import { useState } from 'react';
import { Link } from 'react-router-dom';

/**
 * Listings page - Property showcase with filters and search
 */

interface Property {
  id: number;
  title: string;
  address: string;
  city: string;
  state: string;
  price: number;
  beds: number;
  baths: number;
  sqft: number;
  type: 'Residential' | 'Commercial' | 'Investment';
  status: 'For Sale' | 'For Rent' | 'Sold' | 'Pending';
  image: string;
  featured?: boolean;
}

const properties: Property[] = [
  {
    id: 1,
    title: 'Modern Luxury Estate',
    address: '123 Waterfront Drive',
    city: 'Houston',
    state: 'TX',
    price: 2850000,
    beds: 5,
    baths: 4,
    sqft: 4500,
    type: 'Residential',
    status: 'For Sale',
    image: '/airo-assets/images/pages/listings/property-1',
    featured: true
  },
  {
    id: 2,
    title: 'Waterfront Condo',
    address: '456 Bay Street',
    city: 'Galveston',
    state: 'TX',
    price: 875000,
    beds: 3,
    baths: 2,
    sqft: 2200,
    type: 'Residential',
    status: 'For Sale',
    image: '/airo-assets/images/pages/listings/property-2',
    featured: true
  },
  {
    id: 3,
    title: 'Downtown Loft',
    address: '789 Main Street',
    city: 'Houston',
    state: 'TX',
    price: 650000,
    beds: 2,
    baths: 2,
    sqft: 1800,
    type: 'Residential',
    status: 'For Sale',
    image: '/airo-assets/images/pages/listings/property-3'
  },
  {
    id: 4,
    title: 'Family Home',
    address: '321 Oak Avenue',
    city: 'Sugar Land',
    state: 'TX',
    price: 525000,
    beds: 4,
    baths: 3,
    sqft: 3200,
    type: 'Residential',
    status: 'For Sale',
    image: '/airo-assets/images/pages/listings/property-4'
  },
  {
    id: 5,
    title: 'Commercial Office Building',
    address: '555 Business Parkway',
    city: 'Houston',
    state: 'TX',
    price: 4500000,
    beds: 0,
    baths: 8,
    sqft: 12000,
    type: 'Commercial',
    status: 'For Sale',
    image: '/airo-assets/images/pages/listings/property-5'
  },
  {
    id: 6,
    title: 'Townhouse Complex',
    address: '888 Park Lane',
    city: 'The Woodlands',
    state: 'TX',
    price: 1850000,
    beds: 12,
    baths: 12,
    sqft: 8500,
    type: 'Investment',
    status: 'For Sale',
    image: '/airo-assets/images/pages/listings/property-6'
  }
];

export default function ListingsPage() {
  const [selectedType, setSelectedType] = useState<string>('All');
  const [selectedStatus, setSelectedStatus] = useState<string>('All');
  const [priceRange, setPriceRange] = useState<string>('All');

  const filteredProperties = properties.filter(property => {
    if (selectedType !== 'All' && property.type !== selectedType) return false;
    if (selectedStatus !== 'All' && property.status !== selectedStatus) return false;
    if (priceRange !== 'All') {
      const price = property.price;
      if (priceRange === 'Under $500k' && price >= 500000) return false;
      if (priceRange === '$500k - $1M' && (price < 500000 || price >= 1000000)) return false;
      if (priceRange === '$1M - $2M' && (price < 1000000 || price >= 2000000)) return false;
      if (priceRange === 'Over $2M' && price < 2000000) return false;
    }
    return true;
  });

  return (
    <>
      <title>Property Listings - Tidal Realty Services</title>
      <meta name="description" content="Browse our curated selection of residential, commercial, and investment properties. Find your perfect property with Tidal Realty Services." />
      
      <div className="min-h-screen">
        {/* Hero Section */}
        <section className="relative h-[400px] bg-primary text-primary-foreground overflow-hidden">
          <div className="absolute inset-0">
            <img 
              src="/airo-assets/images/pages/listings/hero" 
              alt="Property listings"
              className="w-full h-full object-cover opacity-30"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-primary/80 to-primary/60" />
          </div>
          
          <div className="container mx-auto px-4 h-full flex items-center relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="max-w-3xl"
            >
              <h1 className="text-5xl md:text-6xl font-bold mb-6">
                Find Your Perfect Property
              </h1>
              <p className="text-xl md:text-2xl opacity-90 mb-8">
                Explore our curated selection of residential, commercial, and investment opportunities.
              </p>
              
              {/* Search Bar */}
              <div className="bg-background rounded-lg p-2 flex gap-2 shadow-xl">
                <div className="flex-1 flex items-center gap-2 px-4">
                  <Search className="h-5 w-5 text-muted-foreground" />
                  <input 
                    type="text" 
                    placeholder="Search by location, property type, or features..."
                    className="flex-1 bg-transparent border-none outline-none text-foreground placeholder:text-muted-foreground"
                  />
                </div>
                <Button size="lg" className="px-8">
                  Search
                </Button>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Filters Section */}
        <section className="py-8 bg-muted/30 border-b sticky top-20 z-40 backdrop-blur-sm">
          <div className="container mx-auto px-4">
            <div className="flex flex-wrap gap-4 items-center">
              <div className="flex items-center gap-2 text-sm font-medium text-muted-foreground">
                <Filter className="h-4 w-4" />
                <span>Filter by:</span>
              </div>

              {/* Property Type Filter */}
              <div className="relative">
                <select 
                  value={selectedType}
                  onChange={(e) => setSelectedType(e.target.value)}
                  className="appearance-none bg-background border border-border rounded-lg px-4 py-2 pr-10 text-sm font-medium cursor-pointer hover:border-primary transition-colors"
                >
                  <option value="All">All Types</option>
                  <option value="Residential">Residential</option>
                  <option value="Commercial">Commercial</option>
                  <option value="Investment">Investment</option>
                </select>
                <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground pointer-events-none" />
              </div>

              {/* Status Filter */}
              <div className="relative">
                <select 
                  value={selectedStatus}
                  onChange={(e) => setSelectedStatus(e.target.value)}
                  className="appearance-none bg-background border border-border rounded-lg px-4 py-2 pr-10 text-sm font-medium cursor-pointer hover:border-primary transition-colors"
                >
                  <option value="All">All Status</option>
                  <option value="For Sale">For Sale</option>
                  <option value="For Rent">For Rent</option>
                  <option value="Sold">Sold</option>
                  <option value="Pending">Pending</option>
                </select>
                <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground pointer-events-none" />
              </div>

              {/* Price Range Filter */}
              <div className="relative">
                <select 
                  value={priceRange}
                  onChange={(e) => setPriceRange(e.target.value)}
                  className="appearance-none bg-background border border-border rounded-lg px-4 py-2 pr-10 text-sm font-medium cursor-pointer hover:border-primary transition-colors"
                >
                  <option value="All">All Prices</option>
                  <option value="Under $500k">Under $500k</option>
                  <option value="$500k - $1M">$500k - $1M</option>
                  <option value="$1M - $2M">$1M - $2M</option>
                  <option value="Over $2M">Over $2M</option>
                </select>
                <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground pointer-events-none" />
              </div>

              <div className="ml-auto text-sm text-muted-foreground">
                {filteredProperties.length} {filteredProperties.length === 1 ? 'property' : 'properties'} found
              </div>
            </div>
          </div>
        </section>

        {/* Featured Properties */}
        {selectedType === 'All' && selectedStatus === 'All' && priceRange === 'All' && (
          <section className="py-16 bg-background">
            <div className="container mx-auto px-4">
              <div className="flex items-center justify-between mb-8">
                <div>
                  <h2 className="text-3xl font-bold mb-2">Featured Properties</h2>
                  <p className="text-muted-foreground">Hand-picked premium listings</p>
                </div>
                <Badge variant="secondary" className="text-sm px-4 py-2">
                  <TrendingUp className="h-4 w-4 mr-2" />
                  Hot Listings
                </Badge>
              </div>

              <div className="grid md:grid-cols-2 gap-8">
                {properties.filter(p => p.featured).map((property, index) => (
                  <motion.div
                    key={property.id}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: index * 0.1 }}
                  >
                    <Card className="overflow-hidden group hover:shadow-2xl transition-all duration-300">
                      <div className="relative h-[400px] overflow-hidden">
                        <img 
                          src={property.image} 
                          alt={property.title}
                          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
                        
                        {/* Status Badge */}
                        <Badge className="absolute top-4 left-4 bg-primary text-primary-foreground">
                          {property.status}
                        </Badge>
                        
                        {/* Featured Badge */}
                        <Badge className="absolute top-4 right-4 bg-accent text-accent-foreground">
                          Featured
                        </Badge>

                        {/* Favorite Button */}
                        <button className="absolute bottom-4 right-4 p-3 bg-background/90 backdrop-blur-sm rounded-full hover:bg-background transition-colors">
                          <Heart className="h-5 w-5 text-muted-foreground hover:text-accent hover:fill-accent transition-colors" />
                        </button>

                        {/* Price */}
                        <div className="absolute bottom-4 left-4">
                          <div className="text-3xl font-bold text-white">
                            ${(property.price / 1000).toFixed(0)}k
                          </div>
                        </div>
                      </div>

                      <CardContent className="p-6">
                        <Badge variant="outline" className="mb-3">
                          {property.type}
                        </Badge>
                        
                        <h3 className="text-2xl font-bold mb-2 group-hover:text-primary transition-colors">
                          {property.title}
                        </h3>
                        
                        <div className="flex items-center gap-2 text-muted-foreground mb-4">
                          <MapPin className="h-4 w-4" />
                          <span className="text-sm">{property.address}, {property.city}, {property.state}</span>
                        </div>

                        <div className="flex items-center gap-6 mb-6 pb-6 border-b">
                          {property.beds > 0 && (
                            <div className="flex items-center gap-2">
                              <Bed className="h-5 w-5 text-primary" />
                              <span className="font-medium">{property.beds} Beds</span>
                            </div>
                          )}
                          <div className="flex items-center gap-2">
                            <Bath className="h-5 w-5 text-primary" />
                            <span className="font-medium">{property.baths} Baths</span>
                          </div>
                          <div className="flex items-center gap-2">
                            <Square className="h-5 w-5 text-primary" />
                            <span className="font-medium">{property.sqft.toLocaleString()} sqft</span>
                          </div>
                        </div>

                        <div className="flex gap-3">
                          <Button className="flex-1">
                            View Details
                          </Button>
                          <Button variant="outline">
                            Schedule Tour
                          </Button>
                        </div>
                      </CardContent>
                    </Card>
                  </motion.div>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* All Properties Grid */}
        <section className="py-16 bg-muted/30">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold mb-8">
              {selectedType !== 'All' || selectedStatus !== 'All' || priceRange !== 'All' 
                ? 'Filtered Results' 
                : 'All Properties'}
            </h2>

            {filteredProperties.length === 0 ? (
              <div className="text-center py-16">
                <Home className="h-16 w-16 text-muted-foreground mx-auto mb-4" />
                <h3 className="text-2xl font-bold mb-2">No properties found</h3>
                <p className="text-muted-foreground mb-6">Try adjusting your filters to see more results</p>
                <Button onClick={() => {
                  setSelectedType('All');
                  setSelectedStatus('All');
                  setPriceRange('All');
                }}>
                  Clear Filters
                </Button>
              </div>
            ) : (
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredProperties.map((property, index) => (
                  <motion.div
                    key={property.id}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.3, delay: index * 0.05 }}
                  >
                    <Card className="overflow-hidden group hover:shadow-xl transition-all duration-300 h-full flex flex-col">
                      <div className="relative h-[280px] overflow-hidden">
                        <img 
                          src={property.image} 
                          alt={property.title}
                          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
                        
                        {/* Status Badge */}
                        <Badge className="absolute top-3 left-3 bg-primary text-primary-foreground text-xs">
                          {property.status}
                        </Badge>

                        {/* Favorite Button */}
                        <button className="absolute top-3 right-3 p-2 bg-background/90 backdrop-blur-sm rounded-full hover:bg-background transition-colors">
                          <Heart className="h-4 w-4 text-muted-foreground hover:text-accent hover:fill-accent transition-colors" />
                        </button>

                        {/* Price */}
                        <div className="absolute bottom-3 left-3">
                          <div className="text-2xl font-bold text-white">
                            ${property.price >= 1000000 
                              ? `${(property.price / 1000000).toFixed(2)}M` 
                              : `${(property.price / 1000).toFixed(0)}k`}
                          </div>
                        </div>
                      </div>

                      <CardContent className="p-5 flex-1 flex flex-col">
                        <Badge variant="outline" className="mb-3 w-fit text-xs">
                          {property.type}
                        </Badge>
                        
                        <h3 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors">
                          {property.title}
                        </h3>
                        
                        <div className="flex items-center gap-2 text-muted-foreground mb-4">
                          <MapPin className="h-4 w-4 flex-shrink-0" />
                          <span className="text-sm line-clamp-1">{property.address}, {property.city}</span>
                        </div>

                        <div className="flex items-center gap-4 mb-4 pb-4 border-b text-sm">
                          {property.beds > 0 && (
                            <div className="flex items-center gap-1.5">
                              <Bed className="h-4 w-4 text-primary" />
                              <span className="font-medium">{property.beds}</span>
                            </div>
                          )}
                          <div className="flex items-center gap-1.5">
                            <Bath className="h-4 w-4 text-primary" />
                            <span className="font-medium">{property.baths}</span>
                          </div>
                          <div className="flex items-center gap-1.5">
                            <Square className="h-4 w-4 text-primary" />
                            <span className="font-medium">{property.sqft.toLocaleString()}</span>
                          </div>
                        </div>

                        <div className="flex gap-2 mt-auto">
                          <Button size="sm" className="flex-1">
                            Details
                          </Button>
                          <Button size="sm" variant="outline">
                            Tour
                          </Button>
                        </div>
                      </CardContent>
                    </Card>
                  </motion.div>
                ))}
              </div>
            )}
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-24 bg-primary text-primary-foreground">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="max-w-4xl mx-auto text-center"
            >
              <DollarSign className="h-16 w-16 mx-auto mb-6 opacity-90" />
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                Don't See What You're Looking For?
              </h2>
              <p className="text-xl mb-8 opacity-90">
                We have access to exclusive off-market properties and can help you find exactly what you need.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" variant="secondary" className="text-lg px-8 py-6">
                  Contact an Agent
                </Button>
                <Button size="lg" variant="outline" className="text-lg px-8 py-6 border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10" asChild>
                  <Link to="/contact">Request Custom Search</Link>
                </Button>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </>
  );
}
