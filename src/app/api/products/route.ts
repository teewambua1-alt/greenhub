import { NextRequest, NextResponse } from 'next/server'
import { db } from '@/lib/db'
import { Product } from '@/lib/products'

export const runtime = 'nodejs'
export const dynamic = 'force-dynamic'

function mapRow(row: any): Product {
  return {
    id: row.id,
    name: row.name,
    brand: row.brand,
    category: row.category,
    type: row.type,
    thc: row.thc,
    cbd: row.cbd,
    price: row.price,
    oldPrice: row.oldPrice ?? undefined,
    rating: row.rating,
    reviews: row.reviews,
    badge: row.badge || undefined,
    effects: row.effects ? row.effects.split(',').filter(Boolean) : [],
    flavors: row.flavors ? row.flavors.split(',').filter(Boolean) : [],
    gradient: row.gradient,
    image: row.image,
    verified: row.verified,
    featured: row.featured,
    trending: row.trending,
  }
}

export async function GET(req: NextRequest) {
  try {
    const { searchParams } = new URL(req.url)
    const featured = searchParams.get('featured') === 'true'
    const trending = searchParams.get('trending') === 'true'

    let rows: any[]
    if (featured) {
      rows = await db.product.findMany({ where: { featured: true }, orderBy: { rating: 'desc' } })
    } else if (trending) {
      rows = await db.product.findMany({ where: { trending: true }, orderBy: { rating: 'desc' } })
    } else {
      rows = await db.product.findMany({ orderBy: { rating: 'desc' } })
    }

    const products = rows.map(mapRow)
    return NextResponse.json(products)
  } catch (error) {
    console.error('Products API error:', error)
    return NextResponse.json({ error: 'Failed to fetch products' }, { status: 500 })
  }
}
