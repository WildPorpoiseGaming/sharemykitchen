/* eslint-disable */
import mongoose from 'mongoose'

export const seedUsers = [
  {
    username: 'mrandolph',
    guest: false,
    host: true,
    host_info: {
      name: 'Micah Randolph',
      address: 'Ap #112-5718 Nullam Rd.',
      city: 'Kelowna',
      zip: '9118',
      email: 'arcu.Vestibulum@egettinciduntdui.edu',
      region: 'British Columbia',
      phone: '1-115-385-7650',
      rating: 1,
      about_me: 'tellus eu augue porttitor interdum. Sed auctor odio a purus. Duis elementum, dui quis accumsan convallis, ante lectus convallis est,',
      picture: 'Ut',
      listings: [],
    },
    guest_info: {},
  },
  {
    username: 'kfrost',
    guest: false,
    host: true,
    host_info: {
      name: 'Kenyon Frost',
      address: 'P.O. Box 813, 7904 Nec Rd.',
      city: 'Malegaon',
      zip: '90121',
      email: 'ornare@magnaseddui.com',
      region: 'Maharastra',
      phone: '1-296-346-7916',
      rating: 7,
      about_me: 'mauris. Integer sem elit, pharetra ut, pharetra sed, hendrerit a, arcu. Sed et libero. Proin mi. Aliquam gravida mauris ut',
      picture: 'Vivamus',
      listings: [],
    },
    guest_info: {},
  },
  {
    username: 'kgentry',
    guest: false,
    host: true,
    host_info: {
      name: 'Keith Gentry',
      address: '368 Diam. Rd.',
      city: 'Port Augusta',
      zip: '71991',
      email: 'a@miDuis.net',
      region: 'SA',
      phone: '1-102-246-4898',
      rating: '9',
      about_me: 'Morbi non sapien molestie orci tincidunt adipiscing. Mauris molestie pharetra nibh. Aliquam ornare, libero at auctor ullamcorper, nisl arcu iaculis',
      picture: 'eu',
      listings: [],
    },
    guest_info: {},
  },
  {
    username: 'jreeves',
    guest: false,
    host: true,
    host_info: {
      name: 'Joshua Reeves',
      address: 'Ap #944-8026 Aliquam Rd.',
      city: 'Santa Cesarea Terme',
      zip: '9796',
      email: 'ut.nisi@arcu.ca',
      region: 'Puglia',
      phone: '1-529-764-9270',
      rating: 4,
      about_me: 'Phasellus nulla. Integer vulputate, risus a ultricies adipiscing, enim mi tempor lorem, eget mollis lectus pede et risus. Quisque libero',
      picture: 'placerat',
      listings: [],
    },
    guest_info: {},
  },
  {
    username: 'blindsey',
    guest: false,
    host: true,
    host_info: {
      name: 'Beck Lindsey',
      address: '606-8865 Commodo Rd.',
      city: 'Lithgow',
      zip: '5051',
      email: 'et.magna.Praesent@orci.net',
      region: 'NSW',
      phone: '1-612-896-1307',
      rating: 10,
      about_me: 'sit amet diam eu dolor egestas rhoncus. Proin nisl sem, consequat nec, mollis vitae, posuere at, velit. Cras lorem lorem,',
      picture: 'mauris',
      listings: [],
    },
    guest_info: {},
  },
  {
    username: 'bduran',
    guest: true,
    host: false,
    host_info: {},
    guest_info: {
      'name': 'Burke Duran',
      'phone': '1-583-253-3348',
      'email': 'dolor@molestiearcu.org',
      'picture': 'non',
      'about_me': 'ut nisi a odio semper cursus. Integer mollis. Integer tincidunt',
    }
  },
  {
    username: 'fbates',
    guest: true,
    host: false,
    host_info: {},
    guest_info: {
      'name': 'Flynn Bates',
      'phone': '1-999-453-7373',
      'email': 'a.malesuada@ipsumSuspendissenon.co.uk',
      'picture': 'auctor',
      'about_me': 'ac turpis egestas. Fusce aliquet magna a neque. Nullam ut',
    },
  },
  {
    username: 'tmiddleton',
    guest: true,
    host: false,
    host_info: {},
    guest_info: {
      'name': 'Thaddeus Middleton',
      'phone': '1-346-978-0122',
      'email': 'bibendum.fermentum.metus@nisiCum.org',
      'picture': 'egestas',
      'about_me': 'dui. Fusce diam nunc, ullamcorper eu, euismod ac, fermentum vel,'
    },
  },
  {
    username: 'cwalker',
    guest: true,
    host: false,
    host_info: {},
    guest_info: {
      'name': 'Colorado Walker',
      'phone': '1-796-515-9867',
      'email': 'est@auctor.co.uk',
      'picture': 'aliquet,',
      'about_me': 'Curabitur egestas nunc sed libero. Proin sed turpis nec mauris',
    },
  },
  {
    username: 'bduran',
    guest: true,
    host: false,
    host_info: {},
    guest_info: {
      'name': 'Lucas Ross',
      'phone': '1-423-516-8102',
      'email': 'dapibus.rutrum@bibendumsed.org',
      'picture': 'Aenean',
      'about_me': 'orci tincidunt adipiscing. Mauris molestie pharetra nibh. Aliquam ornare, libero',
    },
  },
]

export const seedListings = [
  {
    'name': 'gravida non, sollicitudin a, malesuada id,',
    'host_id': mongoose.Types.ObjectId(),
<<<<<<< HEAD
    'pictures': '[]',
=======
    'pictures': ['http://hbu.h-cdn.co/assets/15/36/980x654/gallery-1441147503-green-hills-residence-5.jpg'],
>>>>>>> bece04711aed42ce688f6b53e19ae7677eded1f4
    'features': {
        'refrigerator': 'black',
        'stove': 'electric',
        'oven': 'gas',
        'blender': 'oscar',
        'mixer': 'avantco',
        'seats': 4,
      },
    'rating': 7,
    'area': 'Alajuela',
    'address': 'Ap #314-7289 Metus St.',
    'city': 'San Rafael',
    'zip': '763611',
  },
  {
    'name': 'velit eu sem. Pellentesque ut ipsum',
    'host_id': mongoose.Types.ObjectId(),
<<<<<<< HEAD
    'pictures': '[]',
=======
    'pictures': ['http://images.traditionalhome.mdpcdn.com/sites/traditionalhome.com/files/slide/101145754_p.jpg'],
>>>>>>> bece04711aed42ce688f6b53e19ae7677eded1f4
    'features': {
        'refrigerator': 'black',
        'stove': 'electric',
        'oven': 'gas',
        'blender': 'oscar',
        'mixer': 'avantco',
        'seats': 4,
      },
    'rating': 7,
    'area': 'AU',
    'address': 'P.O. Box 514, 5627 Iaculis Rd.',
    'city': 'Clermont-Ferrand',
    'zip': '82573',
  },
  {
    'name': 'rutrum magna. Cras convallis convallis dolor.',
    'host_id': mongoose.Types.ObjectId(),
<<<<<<< HEAD
    'pictures': '[]',
=======
    'pictures': ['http://hgtvhome.sndimg.com/content/dam/images/hgtv/fullset/2013/3/4/1/sh13_01-kitchen-hero_4x3.jpg.rend.hgtvcom.966.725.jpeg'],
>>>>>>> bece04711aed42ce688f6b53e19ae7677eded1f4
    'features': {
        'refrigerator': 'black',
        'stove': 'gas',
        'oven': 'electric',
        'blender': 'vitamix',
        'mixer': 'avantco',
        'seats': 4,
      },
    'rating': 4,
    'area': 'MO',
    'address': 'P.O. Box 400, 9085 Mollis. Av.',
    'city': 'Saint Louis',
    'zip': '996324',
  },
  {
    'name': 'lobortis, nisi nibh lacinia orci, consectetuer',
    'host_id': mongoose.Types.ObjectId(),
<<<<<<< HEAD
    'pictures': '[]',
=======
    'pictures': ['http://hbu.h-cdn.co/assets/cm/15/04/980x653/54bf3f6489093_-_hbx-kitchen-of-the-year-2014-s2.jpg'],
>>>>>>> bece04711aed42ce688f6b53e19ae7677eded1f4
    'features': {
        'refrigerator': 'stainless',
        'stove': 'gas',
        'oven': 'gas',
        'blender': 'oscar',
        'mixer': 'avantco',
        'seats': 2,
      },
    'rating': 8,
    'area': 'West Bengal',
    'address': '4103 At St.',
    'city': 'Uttarpara-Kotrung',
    'zip': '4150',
  },
  {
    'name': 'ut cursus luctus, ipsum leo elementum',
    'host_id': mongoose.Types.ObjectId(),
<<<<<<< HEAD
    'pictures': '[]',
=======
    'pictures': ['http://hbu.h-cdn.co/assets/15/06/980x598/gallery_nrm_1423079656-hbx-dutch-inspired-kitchen-0512.jpg'],
>>>>>>> bece04711aed42ce688f6b53e19ae7677eded1f4
    'features': {
        'refrigerator': 'stainless',
        'stove': 'gas',
        'oven': 'electric',
        'blender': 'oscar',
        'mixer': 'avantco',
        'seats': 3,
      },
    'rating': 8,
    'area': 'San José',
    'address': '9733 Massa. St.',
    'city': 'San Rafael Abajo',
    'zip': '24138',
  },
  {
    'name': 'metus sit amet ante. Vivamus non',
    'host_id': mongoose.Types.ObjectId(),
<<<<<<< HEAD
    'pictures': '[]',
=======
    'pictures': ['http://hbu.h-cdn.co/assets/16/37/980x653/gallery-kitchen-1.jpg'],
>>>>>>> bece04711aed42ce688f6b53e19ae7677eded1f4
    'features': {
        'refrigerator': 'stainless',
        'stove': 'electric',
        'oven': 'electric',
        'blender': 'oscar',
        'mixer': 'kitchenaid',
        'seats': 6,
      },
    'rating': 4,
    'area': 'ON',
    'address': '252 Phasellus St.',
    'city': 'Oxford County',
    'zip': 'K2H 4V6',
  },
  {
    'name': 'molestie arcu. Sed eu nibh vulputate',
    'host_id': mongoose.Types.ObjectId(),
<<<<<<< HEAD
    'pictures': '[]',
=======
    'pictures': ['http://hbu.h-cdn.co/assets/cm/15/04/54c16f4b5179d_-_hbx-kitchen-of-the-year-island-2012-xln.jpg'],
>>>>>>> bece04711aed42ce688f6b53e19ae7677eded1f4
    'features': {
        'refrigerator': 'stainless',
        'stove': 'gas',
        'oven': 'electric',
        'blender': 'oscar',
        'mixer': 'avantco',
        'seats': 3,
      },
    'rating': 7,
    'area': 'NSW',
    'address': 'P.O. Box 785, 7685 Nunc Avenue',
    'city': 'Wollongong',
    'zip': '41800',
  },
  {
    'name': 'Vestibulum accumsan neque et nunc. Quisque',
    'host_id': mongoose.Types.ObjectId(),
<<<<<<< HEAD
    'pictures': '[]',
=======
    'pictures': ['http://www.miserv.net/large/chatodining.com/wp-content/uploads/2016/02/charming-potted-indoor-plants-feat-cool-small-kitchen-cabinet-remodeling-idea-and-narrow-island-design-plus-white-appliances.jpg'],
>>>>>>> bece04711aed42ce688f6b53e19ae7677eded1f4
    'features': {
        'refrigerator': 'stainless',
        'stove': 'gas',
        'oven': 'gas',
        'blender': 'oscar',
        'mixer': 'avantco',
        'seats': 2,
      },
    'rating': 1,
    'area': 'Wie',
    'address': '736 Et Avenue',
    'city': 'Vienna',
    'zip': '37741',
  },
  {
    'name': 'odio. Nam interdum enim non nisi.',
    'host_id': mongoose.Types.ObjectId(),
<<<<<<< HEAD
    'pictures': '[]',
=======
    'pictures': ['http://hbu.h-cdn.co/assets/17/08/1600x1028/gallery-1487868231-kitchen-1.jpg'],
>>>>>>> bece04711aed42ce688f6b53e19ae7677eded1f4
    'features': {
        'refrigerator': 'black',
        'stove': 'gas',
        'oven': 'electric',
        'blender': 'vitamix',
        'mixer': 'avantco',
        'seats': 4,
      },
    'rating': 5,
    'area': 'C',
    'address': 'Ap #726-3005 Molestie Road',
    'city': 'Paraíso',
    'zip': '15682',
  },
  {
    'name': 'luctus vulputate, nisi sem semper erat,',
    'host_id': mongoose.Types.ObjectId(),
<<<<<<< HEAD
    'pictures': '[]',
=======
    'pictures': ['http://hbu.h-cdn.co/assets/16/23/1600x800/landscape-1465239399-industrial-kitchen.jpg'],
>>>>>>> bece04711aed42ce688f6b53e19ae7677eded1f4
    'features': {
        'refrigerator': 'black',
        'stove': 'electric',
        'oven': 'gas',
        'blender': 'oscar',
        'mixer': 'avantco',
        'seats': 4,
        },
    'rating': 3,
    'area': 'ON',
    'address': '3405 Est Avenue',
    'city': 'Markham',
    'zip': '35-641',
  },
]

export const seedBookings = [
  {
    'listing_id': mongoose.Types.ObjectId(),
    'host_id': mongoose.Types.ObjectId(),
    'guest_id': mongoose.Types.ObjectId(),
    'date': '1490970056',
    'rate': 58,
    'paid': 'true'
  },
  {
    'listing_id': mongoose.Types.ObjectId(),
    'host_id': mongoose.Types.ObjectId(),
    'guest_id': mongoose.Types.ObjectId(),
    'date': '1516984678',
    'rate': 39,
    'paid': 'false'
  },
  {
    'listing_id': mongoose.Types.ObjectId(),
    'host_id': mongoose.Types.ObjectId(),
    'guest_id': mongoose.Types.ObjectId(),
    'date': '1521034619',
    'rate': 51,
    'paid': 'true'
  },
  {
    'listing_id': mongoose.Types.ObjectId(),
    'host_id': mongoose.Types.ObjectId(),
    'guest_id': mongoose.Types.ObjectId(),
    'date': '1511887364',
    'rate': 53,
    'paid': 'false'
  },
  {
    'listing_id': mongoose.Types.ObjectId(),
    'host_id': mongoose.Types.ObjectId(),
    'guest_id': mongoose.Types.ObjectId(),
    'date': '1469385001',
    'rate': 38,
    'paid': 'true'
  },
  {
    'listing_id': mongoose.Types.ObjectId(),
    'host_id': mongoose.Types.ObjectId(),
    'guest_id': mongoose.Types.ObjectId(),
    'date': '1527650929',
    'rate': 63,
    'paid': 'false'
  },
  {
    'listing_id': mongoose.Types.ObjectId(),
    'host_id': mongoose.Types.ObjectId(),
    'guest_id': mongoose.Types.ObjectId(),
    'date': '1476207426',
    'rate': 43,
    'paid': 'true'
  },
]

export const seedReviews = [
  {
    'guest_id': mongoose.Types.ObjectId(),
    'listing_id': mongoose.Types.ObjectId(),
    'title': 'tempor erat neque non quam. Pellentesque habitant morbi tristique senectus',
    'text': 'metus. In lorem. Donec elementum, lorem ut aliquam iaculis, lacus pede sagittis augue, eu tempor erat neque non quam. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Aliquam fringilla cursus purus. Nullam scelerisque neque sed sem egestas blandit. Nam nulla magna, malesuada vel, convallis in,',
    'rating': 6,
    'booking_id': mongoose.Types.ObjectId(),
  },
  {
    'guest_id': mongoose.Types.ObjectId(),
    'listing_id': mongoose.Types.ObjectId(),
    'title': 'Duis elementum, dui quis accumsan convallis, ante lectus convallis est,',
    'text': 'dolor. Fusce mi lorem, vehicula et, rutrum eu, ultrices sit amet, risus. Donec nibh enim, gravida sit amet, dapibus id, blandit at, nisi. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Proin vel nisl. Quisque fringilla euismod enim. Etiam gravida molestie arcu. Sed eu nibh vulputate',
    'rating': 1,
    'booking_id': mongoose.Types.ObjectId(),
  },
  {
    'guest_id': mongoose.Types.ObjectId(),
    'listing_id': mongoose.Types.ObjectId(),
    'title': 'dictum cursus. Nunc mauris elit, dictum eu, eleifend nec, malesuada',
    'text': 'vel, faucibus id, libero. Donec consectetuer mauris id sapien. Cras dolor dolor, tempus non, lacinia at, iaculis quis, pede. Praesent eu dui. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Aenean eget magna. Suspendisse tristique neque venenatis lacus. Etiam bibendum fermentum metus. Aenean sed pede nec',
    'rating': 6,
    'booking_id': mongoose.Types.ObjectId(),
  },
 {
    'guest_id': mongoose.Types.ObjectId(),
    'listing_id': mongoose.Types.ObjectId(),
    'title': 'ridiculus mus. Donec dignissim magna a tortor. Nunc commodo auctor',
    'text': 'Nullam velit dui, semper et, lacinia vitae, sodales at, velit. Pellentesque ultricies dignissim lacus. Aliquam rutrum lorem ac risus. Morbi metus. Vivamus euismod urna. Nullam lobortis quam a felis ullamcorper viverra. Maecenas iaculis aliquet diam. Sed diam lorem, auctor quis, tristique ac, eleifend vitae, erat. Vivamus nisi. Mauris nulla. Integer',
    'rating': 1,
    'booking_id': mongoose.Types.ObjectId(),
  },
  {
    'guest_id': mongoose.Types.ObjectId(),
    'listing_id': mongoose.Types.ObjectId(),
    'title': 'dolor, nonummy ac, feugiat non, lobortis quis, pede. Suspendisse dui.',
    'text': 'Suspendisse sagittis. Nullam vitae diam. Proin dolor. Nulla semper tellus id nunc interdum feugiat. Sed nec metus facilisis lorem tristique aliquet. Phasellus fermentum convallis ligula. Donec luctus aliquet odio. Etiam ligula tortor, dictum eu, placerat eget, venenatis a, magna. Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Etiam laoreet, libero',
    'rating': 7,
    'booking_id': mongoose.Types.ObjectId(),
  },
  {
    'guest_id': mongoose.Types.ObjectId(),
    'listing_id': mongoose.Types.ObjectId(),
    'title': 'velit. Pellentesque ultricies dignissim lacus. Aliquam rutrum lorem ac risus.',
    'text': 'quis, tristique ac, eleifend vitae, erat. Vivamus nisi. Mauris nulla. Integer urna. Vivamus molestie dapibus ligula. Aliquam erat volutpat. Nulla dignissim. Maecenas ornare egestas ligula. Nullam feugiat placerat velit. Quisque varius. Nam porttitor scelerisque neque. Nullam nisl. Maecenas malesuada fringilla est. Mauris eu turpis. Nulla aliquet. Proin velit. Sed malesuada',
    'rating': 7,
    'booking_id': mongoose.Types.ObjectId(),
  },
]
