// app/login/page.tsx
'use client'

import { useState, FormEvent } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/navigation'

export default function LoginPage() {
    const router = useRouter()
    const [formData, setFormData] = useState({
        email: '',
        password: '',
        rememberMe: false
    })
    const [isLoading, setIsLoading] = useState(false)
    const [error, setError] = useState('')

    const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        setIsLoading(true)
        setError('')

        try {
          // Implement your login logic here
          // Example: await signIn(formData.email, formData.password)
        
          // For demo purposes, simulate API call
            await new Promise(resolve => setTimeout(resolve, 1000))
        
          // On success, redirect to dashboard
            router.push('/')
        } catch (err) {
            setError('Invalid email or password')
            console.error('Login error:', err)
        } finally {
            setIsLoading(false)
        }
    }

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value, type, checked } = e.target
        setFormData(prev => ({
            ...prev,
            [name]: type === 'checkbox' ? checked : value
        }))
    }

    return (
        <div className="auth">
            <div className="card">
                <div className="card-body">
                    <div className="card-title text-center text-light">Login to your account</div>

                    {error && (
                        <div className="alert alert-danger" role="alert">
                            {error}
                        </div>
                    )}

                    <form onSubmit={handleSubmit}>
                        <div>
                            <label className="form-label text-light">Email address</label>
                            <input
                                type="email"
                                className="form-control"
                                placeholder="Enter your email"
                                name="email"
                                value={formData.email}
                                onChange={handleChange}
                                required
                            />
                        </div>
                        <br />
                        <div>
                                <label className="form-label text-light">
                                    Password
                                    <Link href="/forgot-password" className="float-right small">
                                        I forgot password
                                    </Link>
                                </label>
                            <input
                                type="password"
                                className="form-control"
                                placeholder="Enter password"
                                name="password"
                                value={formData.password}
                                onChange={handleChange}
                                required
                            />
                        </div>
                        <div className="form-group">
                            <label className="custom-control custom-checkbox">
                                <input
                                    type="checkbox"
                                    className="custom-control-input"
                                    name="rememberMe"
                                    checked={formData.rememberMe}
                                    onChange={handleChange}
                                />
                                <span className="custom-control-label">Remember me</span>
                            </label>
                        </div>
                        <div className="form-footer">
                            <button
                                type="submit"
                                className="btn btn-primary btn-block"
                                disabled={isLoading}
                            >
                                {isLoading ? 'Signing in...' : 'Sign in'}
                            </button>
                        </div>
                    </form>
                </div>
                <div className="text-center text-muted">
                    Don&apos;t have account yet?{' '}
                    <Link href="/register">Sign up</Link>
                </div>
            </div>
        </div>
    )
}