// app/forgot-password/page.tsx
'use client'

import { useState, FormEvent } from 'react'
import Link from 'next/link'

export default function ForgotPasswordPage() {
    const [email, setEmail] = useState('')
    const [isLoading, setIsLoading] = useState(false)
    const [success, setSuccess] = useState(false)
    const [error, setError] = useState('')

    const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        setIsLoading(true)
        setError('')
        setSuccess(false)

        try {
          // Implement your password reset logic here
          // Example: await sendPasswordResetEmail(email)

          // For demo purposes, simulate API call
            await new Promise(resolve => setTimeout(resolve, 1000))

            setSuccess(true)
        } catch (err) {
            setError('Failed to send reset email. Please try again.')
            console.error('Password reset error:', err)
        } finally {
            setIsLoading(false)
        }
    }

    return (
        <div className="auth">
            <div className="card">
                <div className="card-body">
                    <div className="card-title text-center text-light">Forgot Password</div>
                    <p className="text-muted text-center">
                        Enter your email address and we&apos;ll send you a link to reset your password.
                    </p>

                    {error && (
                        <div className="alert alert-danger" role="alert">
                            {error}
                        </div>
                    )}

                    {success && (
                        <div className="alert alert-success" role="alert">
                            Password reset link has been sent to your email!
                        </div>
                    )}

                    <form onSubmit={handleSubmit}>
                        <div>
                            <label className="form-label text-light">Email address</label>
                            <input
                                type="email"
                                className="form-control"
                                placeholder="Enter your email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                required
                            />
                        </div>
                        <div className="form-footer">
                            <button
                                type="submit"
                                className="btn btn-primary btn-block"
                                disabled={isLoading}
                            >
                                {isLoading ? 'Sending...' : 'Send Reset Link'}
                            </button>
                        </div>
                    </form>
                </div>
                <div className="text-center text-muted">
                    Remember your password?{' '}
                    <Link href="/login">Sign in</Link>
                </div>
            </div>
        </div>
    )
}