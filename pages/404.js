import Link from 'next/link';
import utilStyles from '../styles/utils.module.css'


export default function FourOhFour() {
    return (
            <div className={`${utilStyles.centered} ${utilStyles.container}`}>
                <h1>404 - Looks like you're lost</h1>
                <Link href='/'>
                    <a>
                        Let's get back to safety
                    </a>
                </Link>
            </div>
    )
}