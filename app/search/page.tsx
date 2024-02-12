import fetchSearch from '@/lib/fetchSearch'

type Props = {
    searchParams: { 
        q: string
    }
}
async function SearchPage({ searchParams: { q } }: Props) {
    const results = await fetchSearch(q)
    console.log(results)
  return (
    <div>SearchPage</div>
  )
}

export default SearchPage